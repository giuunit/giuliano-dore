var path = require('path');

module.exports = {
	watch: true,
	devtool: 'source-map',
	entry: './index.jsx',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, './')
	},
	module: {
		rules: [
		  {
			test: /\.jsx$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
			}
		  },
		  {
			test: /\.css$/,
			exclude: /node_modules/,
			use: {
				loader: 'style-loader!css-loader',
			}
		  }
		]
	}
};