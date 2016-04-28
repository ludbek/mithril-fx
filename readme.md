# Introduction
`ng-animate` inspired tiny css animation package for `Mithril.js`.

# Installation
## Webpack
`npm install mithril-fx`

## Bower
`bower install mithril-fx`

# Animations
```javascript
var fx = require('mithril-fx')

// Mount - animates fresh element being attached to DOM
fx.mount(tag, attrs, children)

// Toggle - animates an element based upon a boolean value
fx.toggle(boolean, tag, attrs, children)

// Data change - animates when data bound to an element changes
fx.change(data, tag, attrs, children)

// Array - animates elements being added, changed, moved
fx.map(array, callback)
```

# TODO
- support javascript animation
- animation for element being removed

