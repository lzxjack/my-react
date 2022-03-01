const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const common = require('./webpack.common');
const { ROOT_PATH } = require('../constant');

module.exports = merge(common, {
  target: 'browserslist',
  mode: 'production',
  devtool: false,
  output: {
    path: path.resolve(ROOT_PATH, './build'),
    filename: 'js/[name].[contenthash:8].js',
  },
  plugins: [
    // 生产模式使用了MiniCssExtractPlugin.loader，则需要使用MiniCssExtractPlugin
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
    }),
  ],

  // 专门存放优化打包的配置
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
});

// hash/chunkHash/contenthash的区别？
