# Introduction
`ng-animate` inspired tiny css animation package for `Mithril.js`.

# Installation
## Webpack
`npm install mithril-fx`

## Bower
`bower install mithril-fx`

# Demo
Checkout this [fiddle](https://jsfiddle.net/ludbek/b57etjoc/).

# Animations
```javascript
var fx = require('mithril-fx')

// Mount - animates fresh element being attached to DOM
// Adds '.fx.mount' class upon mount
fx.mount(tag, attrs, children)

// Toggle - animates an element based upon a boolean value
// Adds '.fx.true' class on true
// Adds '.fx.flase' class on flase
fx.toggle(boolean, tag, attrs, children)

// Show/Hide - shows or hides an element based upon a boolean value
// Adds '.fx.show' class on true
// Adds '.fx.hide' class on flase
fx.showHide(boolean, tag, attrs, children)

// Data change - animates when data bound to an element changes
// Adds '.fx.change' class on change in data
fx.change(data, tag, attrs, children)

// Array - animates elements being added, changed, moved
// Adds '.fx.mount' class to an item if it is fresh entry
// Adds '.fx.change' class to an item if its data is changed
// Adds '.fx.move.high' class if an item's index decreases
// Adds '.fx.move.low' class if an item's index increases
fx.map(array, callback)

// for stagger animation
fx.map(array, callback, delay)
```

# TODO
- support javascript animation
- animation for element being removed

