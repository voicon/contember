const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const AssetsPlugin = require('assets-webpack-plugin')
const spawn = require('child_process').exec

// variables
const sourcePath = path.join(__dirname, './dist/src')
const outPath = path.join(__dirname, './public')

class AdminServerPlugin {
	apply(compiler) {
		let childProcess = null
		compiler.hooks.afterEmit.tapAsync({ name: 'AdminServerPlugin' }, function(compilation, callback) {
			if (childProcess) {
				callback()
				return
			}
			console.log('starting admin\n')
			try {
				childProcess = spawn('node ./node_modules/cms-admin-server/dist/src/run-admin.js', {
					cwd: process.cwd(),
					env: process.env
				})
				process.on('beforeExit', () => {
					childProcess.kill()
				})
				childProcess.stdout.pipe(process.stdout)
				childProcess.stderr.pipe(process.stderr)
				callback()
			} catch (e) {
				console.error(e)
			}
		})
	}
}

module.exports = ({ production }) => ({
	context: sourcePath,
	entry: {
		index: ['./index.js']
	},
	mode: production ? 'production' : 'development',
	devtool: production ? 'source-map' : 'cheap-module-source-map',
	output: {
		path: outPath,
		publicPath: '/',
		filename: production ? '[name].[hash].js' : '[name].js'
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
		},
		proxy: {
			'/': {
				target: 'http://localhost:' + process.env.SERVER_PORT
			}
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
		new AssetsPlugin(),
		new MiniCssExtractPlugin({
			filename: production ? '[name].[hash].css' : '[name].css'
		}),
		new webpack.DefinePlugin({
			// If you modify these, also update cms-admin/src/types/window.d.ts
			'process.env': {
				NODE_ENV: JSON.stringify(production ? 'production' : 'development')
			}
		}),
		new CompressionPlugin(),
		new AdminServerPlugin()
	]
})
