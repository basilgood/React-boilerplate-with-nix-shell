var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.join(__dirname, 'dist');
var APP_DIR = path.join(__dirname, 'src');

var config = {
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js | jsx)?/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
module.exports = config;
