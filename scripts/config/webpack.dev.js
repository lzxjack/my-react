const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');

const common = require('./webpack.common');
const { ROOT_PATH, SERVER_HOST, SERVER_PORT } = require('../constant');

module.exports = merge(common, {
  target: 'web',
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  output: {
    path: path.resolve(ROOT_PATH, './dist'),
    filename: 'js/[name].js',
  },
  devServer: {
    host: SERVER_HOST,
    port: SERVER_PORT,
    compress: true, // gzip压缩
    open: true, // 自动打开默认浏览器
    hot: true, // 启用服务热替换配置
    client: {
      logging: 'warn', // warn以上的信息，才会打印
      overlay: true,
    },
  },
  plugins: [
    // 引入热替换
    new webpack.HotModuleReplacementPlugin(),
  ],
});
