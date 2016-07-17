const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const babelSettings = {
  extends: path.join(__dirname, '/.babelrc')
};

module.exports = {
  context: __dirname,
  entry: './app/entry.jsx',
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'bundle.js',
    publicPath: '/dist/'

  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      foundation: 'foundation-sites/js/foundation.core'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel?' + JSON.stringify(babelSettings) },
      { test: /node_modules\/(jws|jwa|qs)\/.*\.js$/, loaders: ['babel?optional[]=runtime&stage=0'] },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.scss$/, loaders: ['style', 'css', 'resolve-url', 'sass?sourceMap'] },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url?file-loader?limit=10000!img?progressive=true' }
    ]
  },
  postcss: function (webpack) {
    return [
      autoprefixer({ browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3', 'Firefox >= 20'], flexbox: 'no-2009' })
    ];
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, 'node_modules')]
  }
};
