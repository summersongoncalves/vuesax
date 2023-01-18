const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  parallel: false,
  productionSourceMap: false,
  configureWebpack: {
    entry: {
      app: './src/index.js' 
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'src/style',
          to: 'style/',
          toType: 'dir'
        }
      ])
    ]
  }
}
