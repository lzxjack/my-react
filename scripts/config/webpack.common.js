const path = require('path');
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

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
    index: path.resolve(ROOT_PATH, './src/index'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(ROOT_PATH, './public/index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
    new WebpackBar(),
    // webpack打包不会有类型检查，强制ts类型检查
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(ROOT_PATH, './tsconfig.json'),
      },
    }),
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
      {
        test: /\.(tsx?|js)$/, // ts\tsx\js
        loader: 'babel-loader',
        options: { cacheDirectory: true }, // 缓存公共文件
        exclude: /node_modules/,
      },
    ],
  },

  // 路径配置别名
  resolve: {
    alias: {
      '@src': path.resolve(ROOT_PATH, './src'),
      '@components': path.resolve(ROOT_PATH, './src/components'),
      '@utils': path.resolve(ROOT_PATH, './src/utils'),
    },
    // 若没有写后缀时，依次从数组中查找相应后缀文件是否存在
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
};
