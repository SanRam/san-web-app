import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/assets/js/vendor'),
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),

    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      favicon: 'src/assets/images/favicon.ico',
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    })
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, exclude: /node_modules/, loader:  "style-loader!css-loader"},
      {test: /\.(png|jpg|svg|ttf|eot|woff|woff2|svg|ijmap)$/, exclude: /node_modules/, loader: "url-loader?limit=10000"},
      {test: /\.(pdf)$/, exclude: /node_modules/, loader: "file?name=[name].[ext]"}

    ]
  }
}
