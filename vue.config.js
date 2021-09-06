const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const vueConfig = {
  outputDir: 'build/',
  transpileDependencies: ['vuetify'],
  devServer: {
    port: 9000, // CHANGE PORT
    disableHostCheck: true
  },
  pwa: {
    name: 'eFishery',
    themeColor: '#28b796',
    msTileColor: '#28b796',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#28b796',
    manifestOptions: {
      start_url: '/'
    }
  },
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new webpack.ProvidePlugin({
        'window.Quill': 'quill'
      }),
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /id/),
    ],
    resolve: {
      alias: {
        'Assets': path.resolve(__dirname, './src/assets'),
        'Helper': path.resolve(__dirname, './src/helper'),
        'Components': path.resolve(__dirname, './src/components'),
        'Views': path.resolve(__dirname, './src/views'),
        'Api': path.resolve(__dirname, './src/api'),
        'Config': path.resolve(__dirname, './src/config'),
        'Router': path.resolve(__dirname, './src/router'),
        'Store': path.resolve(__dirname, './src/store'), 
        'Plugins': path.resolve(__dirname, './src/plugins'), 
      }
    }
  }
}

if(process.env.VUE_APP_REPORT_SOURCE == 'true') {
  vueConfig.configureWebpack.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = vueConfig