const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env, argv) {
	const mode = argv.mode;
	const production = mode === 'production';
	const config = {
		mode,

		entry: './src/mergely.jsx',

		devtool: 'source-map',

		module: {
			rules: [{
				test: /\.jsx$/,
				include: [
					path.resolve(__dirname, 'src')
				],
				exclude: [/node_modules/],
				use: [{
					loader: 'babel-loader'
				}]
			}, {
				test: /\.css$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}]
			}]
		},

		plugins: [],

		output: {
			filename: 'mergely.js',
			path: path.resolve(__dirname, 'lib'),
			library: {
				name: 'mergely-react',
				type: 'umd',
			}
		},

		externals: {
			react: 'react',
			'react-dom' : 'reactDOM'
		}
	};
	if (!production) {
		config.entry = './src/index.jsx';
		config.devtool = 'eval';
		delete config.externals;
		config.plugins.push(
			new HtmlWebpackPlugin({
				templateContent: '<div id="root"></div>'
			})
		);
	}
	return config;
}
