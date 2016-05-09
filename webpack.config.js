var webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",
  entry: {
    index: "./scripts/index.js"
  },
  output: {
    path: __dirname + "/dist/js",
    filename: "app.min.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/i,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      Waves: "node-waves"
    })
  ],
  node: {
    fs: 'empty'
  }
};
