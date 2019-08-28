module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: '../',
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
  }
};
