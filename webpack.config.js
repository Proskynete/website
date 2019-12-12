const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
	return {
		entry: path.resolve(__dirname, 'src', 'main.js'),
		output: {
			path: path.resolve(__dirname, './build/'),
			filename: 'bundle.js',
		},
		devServer: {
			contentBase: './',
			port: 8080,
			compress: true,
			inline: true,
			historyApiFallback: true,
		},
		resolve: {
			extensions: ['.jsx', '.js'],
			alias: {
				'@Assets': path.resolve(__dirname, 'assets'),
				'@Helpers': path.resolve(__dirname, 'src', 'helpers'),
				'@Components': path.resolve(__dirname, 'src', 'components'),
				'@Contents': path.resolve(
					__dirname,
					'src',
					'config',
					'content',
					'components',
				),
				'@Config': path.resolve(__dirname, 'src', 'config'),
				'@Sass': path.resolve(__dirname, 'src', 'assets', 'scss'),
				'@Views': path.resolve(__dirname, 'src', 'views'),
			},
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
					},
				},
				{
					test: /\.(sass|scss)$/,
					exclude: /(node_modules|bower_components)/,
					loaders: [
						{ loader: 'style-loader' },
						{ loader: 'css-loader', options: { sourceMap: true } },
						{
							loader: 'sass-loader',
							options: { sourceMap: true },
						},
					],
				},
				{
					test: /\.(jpe?g|png|gif|mp3|icon)$/i,
					include: path.resolve(__dirname, 'assets', 'images'),
					exclude: /(node_modules|bower_components)/,
					loader: 'file-loader',
				},
				{
					test: /\.html$/,
					use: [
						{
							loader: 'html-loader',
						},
					],
				},
			],
		},
		externals: ['window'],
		plugins: [
			new webpack.ProgressPlugin(),
			new HtmlWebpackPlugin({
				template: './src/index.html',
				hash: true,
			}),
			new webpack.DefinePlugin({
				ENVIRONMENT: JSON.stringify(env.NODE_ENV),
			}),
		],
	};
};
