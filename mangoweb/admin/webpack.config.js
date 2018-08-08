var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// variables
var sourcePath = path.join(__dirname, './dist/src');
var outPath = path.join(__dirname, './public');

module.exports = ({ production }) => ({
	context: sourcePath,
	entry: {
		admin: ['./index.js'],
	},
	mode: production ? 'production' : 'development',
	devtool: production ? 'source-map' : 'cheap-module-source-map',
	output: {
		path: outPath,
		publicPath: '/dist/',
		filename: '[name].js',
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
				test:/\.((s*)css|sass)$/,
				use: [
					production ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		],
	},
	devServer: {
		contentBase: sourcePath,
		hot: true,
		stats: {
			warnings: false
		},
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
			"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
		}
	},
	node: {
		// workaround for webpack-dev-server issue
		// https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
		fs: 'empty',
		net: 'empty'
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
		})
	],
});
