const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const VENDOR_LIBS = [
	'react',
	'react-dom',
	'redux',
	'react-redux'
];

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
	entry: {
		bundle: './src/index.tsx',
		vendor: VENDOR_LIBS
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].[chunkhash].js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader',
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				enforce: "pre",
				loader: "source-map-loader"
			},
			{
				test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader')
			},
			{
				test: /\.scss$/,
				use: extractSass.extract({
					use: [{
						loader: "css-loader"
					}, {
						loader: "sass-loader"
					}],
					fallback: "style-loader"
				})
			}
		]
	},
	plugins: [
		extractSass,
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest']
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	devServer: {
		historyApiFallback: true
	}
};
