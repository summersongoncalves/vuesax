const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
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
