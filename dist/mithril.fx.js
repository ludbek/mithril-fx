var fx =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var m = __webpack_require__(1)
	var _ = __webpack_require__(2)
	var $ = __webpack_require__(3)

	var noop = function () {}

	var getVDOM = function (args) {
	  return m.apply(m, args)
	}

	module.exports = function () {
	  function mountUnmount() {
	    var vdom = getVDOM(arguments)

	    var attachAnimation = function (el, initialized, ctx)  {
	      var dom = $(el)

	      if (initialized) return

	      // before initialization
	      dom.addClass('fx add')
	        .one('animationend', function () {dom.removeClass('fx add')})

	      ctx.onunload = function () {
	        console.log('unloaded')
	        m.startComputation()
	        dom.addClass('fx remove')
	          .one('animationend', function () {
	            console.log('animation done')
	            dom.removeClass('fx remove')
	            m.endComputation()
	          })
	      }
	    }

	    // attach animate to attrs.config
	    var originalConfig = vdom.attrs.config
	    vdom.attrs.config = function (el, initialized, ctx, dom) {
	      if (originalConfig) originalConfig(el, initialized, ctx, dom)
	      attachAnimation(el, initialized, ctx)
	    }

	    return m(vdom.tag, vdom.attrs, vdom.children)
	  }

	  // m(node, attrs, data)
	  if (_.isString(arguments[0]) && arguments.length >= 2) {
	    return mountUnmount.apply(mountUnmount, arguments)
	  }


	  // //hide show
	  // function toggle() {
	  //   var vdom = getVDOM(arguments)
	  //   if (vdom.attrs._toggle !== false || vdom.attrs.boolean !== true) new Error('toggle requires a "attrs.boolean" field.');

	  //   var value = vdom.attrs._toggle;

	  //   var animate = function (el, initialized, ctx)  {
	  //     var dom = $(el);

	  //     if(!initialized) {
	  //       if (value) {
	  //         dom.css('display', 'block');
	  //         }
	  //       else {
	  //         dom.css('display', 'none');
	  //         }
	  //       ctx.state = value;
	  //       }

	  //     if (ctx.state === value) return;
	  //     if (value) {
	  //       var className = 'animation show';
	  //       dom.css('display', 'block');
	  //       dom.addClass(className)
	  //         .one('animationend', function () {dom.removeClass(className);});
	  //       }
	  //     else {
	  //       var className = 'animation hide';
	  //       dom.addClass(className)
	  //         .one('animationend', function () {dom.removeClass(className);dom.css('display', 'none');});
	  //       }

	  //     ctx.state = value;
	  //     };

	  //   // attach animate to attrs.config
	  //   var originalConfig = vdom.attrs.config;
	  //   vdom.attrs.config = function (el, initialized, ctx) {
	  //     if (originalConfig) originalConfig(el, initialized, ctx);
	  //     animate(el, initialized, ctx);
	  //   };

	  //   return m(vdom.tag, vdom.attrs, vdom.children);
	  //   }


	  // // mount, unmount, change, move low, move high
	  // function collection(data, callback) {
	  //   if (!(data && callback)) new Error('map needs at least two arguments.');

	  //   var elements = _.map(data, callback);
	  //   // armc animator
	  //   var armc = function (index, data, config) {
	  //     return function (el, initialized, ctx) {
	  //       var dom = $(el);
	  //       var addClass = 'animation add';
	  //       var changeClass = 'animation change';

	  //       // execute original config
	  //       if (config) config(el, initialized, ctx);

	  //       // for addition of element
	  //       if(!initialized) {
	  //         dom.addClass(addClass)
	  //           .one('animationend', function () {dom.removeClass(addClass)});
	  //       }
	  //       // for element move
	  //       if ((ctx.index || ctx.index === 0) && ctx.index < index) {
	  //         dom.addClass('animation move low')
	  //           .one('animationend', function () {dom.removeClass('animation move low')});
	  //       }
	  //       else if ((ctx.index || ctx.index === 0) && ctx.index > index) {
	  //         dom.addClass('animation move high')
	  //           .one('animationend', function () {dom.removeClass('animation move high')});
	  //       }
	  //       // if change in data
	  //       if (ctx.data && !_.isEqual(ctx.data, data)) {
	  //         dom.addClass(changeClass)
	  //           .one('animationend', function () {dom.removeClass(changeClass)});
	  //       }
	  //       // save state
	  //       ctx.data = _.clone(data, true);
	  //       ctx.index = index;
	  //     };
	  //   };

	  //   // attach animation to elements
	  //   return _.map(_.range(data.length), function (index) {
	  //     var delement = elements[index], ddata = data[index];
	  //     var originalConfig = delement.attrs.config;

	  //     delement.attrs.key = ddata.id || ddata;
	  //     delement.attrs.config = armc(index, ddata, originalConfig);

	  //     return delement;
	  //   });
	  // }
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = m;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = $;

/***/ }
/******/ ]);