'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: path.join(__dirname, 'src', 'main'),
        libs: path.join(__dirname, 'src', 'libs')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
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
                        'transform-class-properties'
                    ]
                }
            }]
        }, {
            test: /\.sass$/,
            exclude: /node_modules/,
            /*loader: 'style-loader!css-loader!sass-loader'*/
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader!sass-loader'
            })
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
           /* loader: 'style-loader!css-loader'*/
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                'loader': 'url-loader',
                'options': {
                    limit: 10000,
                    mimetype: 'application/font-woff',
                    name: './fonts/[name].[ext]'
                }
            }]
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                'loader': 'url-loader',
                'options': {
                    limit: 10000,
                    mimetype: 'application/font-woff2',
                    name: './fonts/[name].[ext]'
                }
            }]
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                'loader': 'url-loader',
                'options': {
                    limit: 10000,
                    mimetype: 'application/octet-stream',
                    name: './fonts/[name].[ext]'
                }
            }]
        }, {
            test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                'loader': 'url-loader',
                'options': {
                    limit: 10000,
                    mimetype: 'application/font-otf',
                    name: './fonts/[name].[ext]'
                }
            }]
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                'loader': 'file-loader',
                'options': {
                    name: './fonts/[name].[ext]'
                }
            }]
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                'loader': 'url-loader',
                'options': {
                    limit: 10000,
                    mimetype: 'image/svg+xml',
                    name: './fonts/[name].[ext]'
                }
            }]
        }, {
            test: /\.(png|jpg|jpeg)$/,
            use: [{
                'loader': 'file-loader',
                'options': {
                    name: './img/[name].[ext]'
                }
            }]
        }]
    },
    devtool: 'source-map',
    target: 'web',
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.sass']
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
        }),
        new ExtractTextPlugin('main.css'),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: path.join(__dirname, 'dist', 'index.html')
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: ['dist']
            }
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};