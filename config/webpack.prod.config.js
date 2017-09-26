var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  devtool: '#source-map',
  plugins: [
    new ExtractTextPlugin('css/[name].bundle.css?[hash:7]'),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      },
      comments: false
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
})
