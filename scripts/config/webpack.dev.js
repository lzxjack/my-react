const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');

const common = require('./webpack.common');
const { ROOT_PATH } = require('../constant');

module.exports = merge(common, {
  target: 'web', // 解决热更新失效
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  output: {
    path: path.resolve(ROOT_PATH, './build'),
    filename: 'js/[name].js',
    // 404
    publicPath: '/',
  },
  devServer: {
    compress: true, // gzip压缩
    open: true, // 自动打开默认浏览器
    hot: true, // 启用服务热替换配置
    client: {
      logging: 'warn', // warn以上的信息，才会打印
      overlay: true,
    },
    // 404
    historyApiFallback: {
      index: path.join(ROOT_PATH, './public/index.html'),
    },
  },
  plugins: [
    // 引入热替换
    new webpack.HotModuleReplacementPlugin(),
  ],

  optimization: {
    minimize: false,
    minimizer: [],
    // 代码分割
    splitChunks: {
      chunks: 'all',
      minSize: 0,
    },
  },
});
