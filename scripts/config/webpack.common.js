const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');

const { ROOT_PATH } = require('../constant');

module.exports = {
  entry: {
    app: path.resolve(ROOT_PATH, './src/index.js'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(ROOT_PATH, './public/index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
    new WebpackBar(),
  ],
};
