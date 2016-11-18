var ProvidePlugin = require('webpack').ProvidePlugin;

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
    new ProvidePlugin({
      // extracts jquery into the global namespace
      // under $/jQuery variable names
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  resolve: {
    extensions: ['', '.js'],
  }
}
