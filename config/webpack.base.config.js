var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  entry:  './src/app.js',
  output: {
    path: path.resolve(process.cwd(), './dist'),
    filename: 'js/[name].bundle.js?[hash:7]',
    publicPath: '/',
    chunkFilename: 'js/[name].bundle.js?[hash:7]'
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: isProduction ?
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          }) : ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: isProduction ?
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          }) : ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        enforce: "pre",
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]?[hash:7]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  performance: {
    hints: false
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      minify: {
        removeComments: isProduction ? true : false,
        collapseWhitespace: isProduction ? true : false
      }
    })
  ]
}
