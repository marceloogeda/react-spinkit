var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './examples/index'
  ],
  devServer: {
    contentBase: './examples/',
    hot: true
  },
	output: {
    path: path.join(__dirname, 'examples'),
		filename: 'bundle.js',
	},
	resolveLoader: {
		modulesDirectories: ['node_modules']
	},
	resolve: {
		extensions: ['', '.js']
	},
  plugins: [
  ],
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			},
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
    ]
  }
};
