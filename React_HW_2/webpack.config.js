'use strict'

var path                = require('path');
var webpack             = require('webpack');
var HtmlWebpackPlugin   = require('html-webpack-plugin');
var BrowserSyncPlugin   = require('browser-sync-webpack-plugin');
var CleanWebpackPlugin  = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    main: path.join(__dirname, 'app/js', 'main')
  },
  output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].min.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules|bower_components/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            'react',
            'es2015',
            'stage-0'
          ],
          plugins: [
            'react-html-attrs',
            'transform-decorators-legacy',
          ]
        }
      }]
    },
    {
      test: /\.css$/,
      exclude: /node_modules|bower_components/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    }]
  },
  resolve: {
    extensions: [' ', '.js', '.jsx', '.sass', '.css']
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDom: 'react-dom'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'app', 'index.html'),
      filename: path.join(__dirname, 'dist', 'index.html')
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      server: {
        baseDir: ['dist']
      }
    }),
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('main.css')
  ]
};