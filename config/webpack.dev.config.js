var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.config')
var utils = require('./utils')
var proxyOptions = require('./proxyOptions')
var mockData = require('../mock/db.json')

module.exports = merge(baseConfig, {
  devtool: '#eval-source-map',
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    proxy: utils.createProxy(mockData, proxyOptions)
  }
})
