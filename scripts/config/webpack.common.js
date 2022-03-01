const path = require('path');
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { ROOT_PATH } = require('../constant');
const { isDevelopment, isProduction } = require('../env');

const getCssLoaders = () => {
  const cssLoaders = [
    // 开发模式使用style-loader，生产模式MiniCssExtractPlugin.loader
    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          // 模块化类名，防止重复
          localIdentName: '[local]--[hash:base64:5]',
        },
        sourceMap: isDevelopment,
      },
    },
  ];

  // 加css前缀的loader配置
  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          isProduction && [
            'postcss-preset-env',
            {
              autoprefixer: {
                grid: true,
              },
            },
          ],
        ],
      },
    },
  };

  // 生产模式时，才需要加css前缀
  isProduction && cssLoaders.push(postcssLoader);

  return cssLoaders;
};

module.exports = {
  entry: {
    index: path.resolve(ROOT_PATH, './src/index.js'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(ROOT_PATH, './public/index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
    new WebpackBar(),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [...getCssLoaders()],
      },
      {
        test: /\.less$/,
        use: [
          ...getCssLoaders(),
          {
            loader: 'less-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          ...getCssLoaders(),
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
    ],
  },
};
