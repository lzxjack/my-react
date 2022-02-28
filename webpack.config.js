const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.export = {
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'My React',
      template: './public/index.html',
    }),
  ],
};
