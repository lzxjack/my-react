const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');
const { ROOT_PATH } = require('../constant');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    path: path.resolve(ROOT_PATH, './build'),
    filename: 'js/[name].[contenthash:8].js',
  },
});

// hash/chunkHash/contenthash的区别？
