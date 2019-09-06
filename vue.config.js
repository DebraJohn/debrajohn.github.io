module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: process.env.NODE_ENV === 'production' ? '../' : 'dist',
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
