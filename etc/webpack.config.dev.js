var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    debug: true,
    devtool: 'cheap-module-eval-source-map',
    noinfo: false,
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './.compiled/src/index'
    ],
    target: 'web',
    output: {
        path: __dirname + '/../dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: '../src'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: '_template.html'
        }),
    ],
}
