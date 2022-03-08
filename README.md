## 热替换的问题

配置了热替换，修改 js 代码后，页面直接渲染出新的元素，而不是替换旧元素。

## 使用 react-router-dom 来配置路由跳转，防止 404 错误

```js
devServer: {
  // ...
  historyApiFallback: true,
}
```

## 安装`node-sass`失败

先全局安装`node-gyp`：

```
npm install -g node-gyp
```

再到项目根目录下，`yarn`继续安装即可。

## antd 样式按需加载

 安装`babel-plugin-import`，在`.babelrc`文件的`plugins`下，添加一项：

```js
// .babelrc or babel-loader option
{
  "plugins": [
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": "css" // `style: true` 会加载 less 文件
    }]
  ]
}
```

## css-module 与 antd 样式冲突

当`css-loader`配置了模块化引入时，如下所示：

```js
    {
      loader: 'css-loader',
      options: {
        modules: {
          // 模块化类名，防止重复
          localIdentName: '[local]--[hash:base64:5]',
        },
        sourceMap: isDevelopment,
      },
```

发现 antd 的样式不显示了。原因是模块化也应用于`node_modules`中的文件了，把 antd 中引入的样式也作了模块化，但是引入的组件还是正常的类名，所以显示不出。

解决办法：

将自己写的业务代码与第三方库的代码配置分开，

```js
module.exports = {
  // ...
  
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: [/node_modules/], // 排除第三方库代码
        use: [...getCssLoaders()], // 正常配置
      },
      {
        test: /\.css$/,
        exclude: [/src/], // 排除业务代码
        use: ['style-loader', 'css-loader'], // 不开启module
      },
      // ...
    ],
  },
  
  // ...
};
```

