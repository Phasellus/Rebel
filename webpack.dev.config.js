/* eslint-env node */
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'build/assets/scripts'),
    publicPath: 'build/assets/scripts/',
    filename: 'main.min.js'
  },
  resolve: {
    alias: {
      'jquery-ui': 'jquery-ui-dist/jquery-ui.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
