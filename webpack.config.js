var webpack = require('webpack')
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin')

module.exports = {
  target: 'web',
  entry: './index.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'mithril-fx.js',
    library: 'fx',
    libraryTarget: 'var'
  },
  externals: {
    mithril: "m",
    jquery: "$",
    lodash: "_"
  },
  plugins: [
    new UglifyJsPlugin()
  ]
}
