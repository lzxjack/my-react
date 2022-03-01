1. 热替换的问题

配置了热替换，修改 js 代码后，页面直接渲染出新的元素，而不是替换旧元素。

2. 使用 react-router-dom 来配置路由跳转，防止 404 错误

```js
// scripts/config/webpack.dev.js
{
    output: {
        path: path.resolve(PROJECT_PATH, './dist'),
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: {
			index: path.join(PROJECT_PATH, './public/index.html')
	},
}
```
