// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  outputDir: "dist-taf-browser",
  assetsDir: "assets",
  filenameHashing: true,
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV !== 'production',
  // configureWebpack: {
  //   plugins: [
  //     new HtmlWebpackPlugin(),
  //     new CleanWebpackPlugin()
  //   ]
  // },
  // devServer: {
  //   open: true,
  //   port: 8004,
  //   proxy: {
  //     '/api': {
  //       target: "",
  //       changeOrigin: true,
  //     }
  //   }
  // }
}
