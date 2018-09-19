var path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

// variables
var sourcePath = path.join(__dirname, './dist/src')
var outPath = path.join(__dirname, './public')

module.exports = ({ production }) => ({
	context: sourcePath,
	entry: {
		index: ['./index.js']
	},
	mode: production ? 'production' : 'development',
	devtool: production ? 'source-map' : 'cheap-module-source-map',
	output: {
		path: outPath,
		publicPath: '/dist/',
		filename: '[name].js'
	},
	target: 'web',
	resolve: {
		extensions: ['.js', '.ts', '.tsx'],
		mainFields: ['main']
	},
	module: {
		rules: [
			// .ts, .tsx
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader'
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader?limit=100000'
			},
			{
				test: /\.((s*)css|sass)$/,
				use: [
					production ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader',
					'resolve-url-loader',
					'sass-loader'
				]
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, './src'),
		hot: true,
		stats: {
			warnings: false
		},
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
		}
	},
	node: {
		// workaround for webpack-dev-server issue
		// https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
		fs: 'empty',
		net: 'empty',
		process: false
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development')
			}
		})
	]
})
