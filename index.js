var m = require('mithril')
var _ = require('lodash')
var $ = require('jquery')

var noop = function () {}

var getVDOM = function (args) {
  return m.apply(m, args)
}

var getArray = function (arrayLike) {
  var args = []

  for (var i = 1, length = arrayLike.length; i < length; i++) {
    args[i - 1] = arrayLike[i]
  }
  return args
}

var events = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'

module.exports = function () {
  // fx(node, attrs, data)
  if (_.isString(arguments[0]) && arguments.length >= 2) {
    var vdom = getVDOM(arguments)

    var animate = function (el, initialized, ctx) {
      var dom = $(el)
      if (initialized) return
      dom.addClass('fx mount')
        .one(events, function () {dom.removeClass('fx mount')})
    }

    // attach animate to attrs.config
    var originalConfig = vdom.attrs.config
    vdom.attrs.config = function (el, init, ctx, dom) {
      if (originalConfig) originalConfig.call(vdom, el, init, ctx, dom)
      animate.call(vdom, el, init, ctx, dom)
    }

    return m(vdom.tag, vdom.attrs, vdom.children)
  }
  // fx(boolean, node, attrs, data)
  else if (_.isBoolean(arguments[0])) {
    var value = arguments[0]
    var vdom = getVDOM(getArray(arguments))

    var animate = function (el, initialized, ctx)  {
      var dom = $(el)

      if(!initialized) {
        if (value) {
          dom.css('display', 'block')
          }
        else {
          dom.css('display', 'none')
          }
        ctx.state = value
        }

      if (ctx.state === value) return
      if (value) {
        var className = 'fx show'
        dom.css('display', 'block')
        dom.addClass(className)
          .one(events, function () {dom.removeClass(className)})
        }
      else {
        var className = 'fx hide'
        dom.addClass(className)
          .one(events, function () {
            dom.removeClass(className)
            dom.css('display', 'none')
          })
        }

      ctx.state = value
    }

    var originalConfig = vdom.attrs.config
    vdom.attrs.config = function (el, init, ctx, dom) {
      if (originalConfig) originalConfig.call(vdom, el, init, ctx, dom)
      animate.call(vdom, el, init, ctx, dom)
    }

    return m(vdom.tag, vdom.attrs, vdom.children)
  }
  // fx(array, callback)
  else if(_.isArray(arguments[0], arguments.length === 2)) {
    var data = arguments[0], callback = arguments[1]

    var elements = _.map(data, callback)

    var animate = function (index, data, config) {
      return function (el, initialized, ctx) {
        var dom = $(el)
        var addClass = 'fx mount'
        var changeClass = 'fx change'
        var moveHigh = 'fx move high'
        var moveLow = 'fx move low'

        // execute original config
        if (config) config(el, initialized, ctx)

        // for addition of element
        if(!initialized) {
          dom.addClass(addClass)
            .one(events, function () {dom.removeClass(addClass)})
        }
        // for element move
        if ((ctx.index || ctx.index === 0) && ctx.index < index) {
          dom.addClass(moveLow)
            .one(events, function () {dom.removeClass(moveLow)})
        }
        else if ((ctx.index || ctx.index === 0) && ctx.index > index) {
          dom.addClass(moveHigh)
            .one(events, function () {dom.removeClass(movieHigh)})
        }
        // if change in data
        if (ctx.data && !_.isEqual(ctx.data, data)) {
          dom.addClass(changeClass)
            .one(events, function () {dom.removeClass(changeClass)})
        }
        // save state
        ctx.data = _.clone(data, true)
        ctx.index = index
      }
    }

    // attach animation to elements
    return _.map(_.range(data.length), function (index) {
      var delement = elements[index], ddata = data[index]
      var originalConfig = delement.attrs.config

      delement.attrs.key = ddata.id || ddata
      delement.attrs.config = animate(index, ddata, originalConfig)

      return delement
    })
  }
}