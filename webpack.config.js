var ProvidePlugin = require('webpack').ProvidePlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    // set our app.js as the entry point
    // to the PixiJS application
    './app',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      // SASS loader
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!postcss-loader!sass-loader')
      },
      // JavaScript loader
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        // run JS through Babel
        loader: 'babel-loader',
        query: {
          // use the ES6 preset for JS code
          presets: ['es2015']
        }
      },
    ]
  },
  plugins: [
    // extract compiled CSS
    new ExtractTextPlugin('public/styles.css', {
      allChunks: true,
    }),
    new ProvidePlugin({
      // extracts jquery into the global namespace
      // under $/jQuery variable names
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  resolve: {
    extensions: ['', '.js'],
  },
  // postcss config, runs autoprefixer on compiled CSS
  postcss: [
    Autoprefixer({
      browsers: ['last 2 versions'] 
    })
  ]
}
