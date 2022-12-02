const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    // Define env variables through webpack
    // new webpack.DefinePlugin({
    //   'process.env.name': JSON.stringify('Suhas Murthy'),
    // }),
    new BundleAnalyzerPlugin(),
  ],
}
