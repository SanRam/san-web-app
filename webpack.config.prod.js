import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';


export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/assets/js/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    //import ExtractTextPlugin from 'extract-text-webpack-plugin';
    // Generate an external css file with a hash in the filename
    //new ExtractTextPlugin('[name].[contenthash].css'),
    // loaders: ExtractTextPlugin.extract('css?sourceMap')}
    // inject jquery
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),

    // Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash(),

    // Use CommonsChunkPlugin to create a separate bundle
    // of vendor libraries so that they're cached separately.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
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


    }),

    // Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin({
      comments:false,
      compress:{
        warnings:false,
        drop_console:true
      }
    })


  
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.css$/, exclude: /node_modules/, loader:  "style-loader!css-loader"},
      {test: /\.(png|jpg|svg|ttf|eot|woff|woff2|svg|ijmap)$/, exclude: /node_modules/, loader: "url-loader?limit=10000"},
      {test: /\.(pdf)$/, exclude: /node_modules/, loader: "file-loader"}
      
    ]
  }
};
