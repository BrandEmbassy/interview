var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    debug: true,
    noinfo: false,
    entry: [
        './.compiled/src/index'
    ],
    target: 'web',
    output: {
        path: __dirname + '/../dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: true,
            mangle: true
        }),
        new HtmlWebpackPlugin({
            template: '_template.html'
        })
    ],

}
