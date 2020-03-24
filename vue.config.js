module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/page' : '/',
  outputDir: 'page',
  assetsDir: process.env.NODE_ENV === 'production' ? './' : 'page',
  indexPath: '../index.html',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: 'html-loader'
            },
            {
              loader: 'markdown-loader',
              options: {
                /* your options here */
              }
            }
          ]
        }
      ]
    }
  },
  // devServer: {
  //   // 设置代理
  //   proxy: {
  //     '/': {
  //       target: process.env.NODE_ENV === 'production' ? 'http://49.235.94.148:8888/' : 'http://127.0.0.1:8888', // 域名
  //       ws: false, // 是否启用websockets
  //       changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
  //       pathRewrite: {
  //         '^/': '/'
  //       }
  //     }
  //   }
  // }
};
