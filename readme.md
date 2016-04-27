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
fx(tag, attrs, data)

// Toggle - animates an element based upon the a boolean value
fx(boolean, tag, attrs, data)

// List - animates elements being added, changed, moved
fx(list, callback)
```

# TODO
- support javascript animation
- animation for element being removed

