const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    'sw-renderer': './src/sw-renderer.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
    library: 'SWRenderer',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.handlebars$/, loader: 'handlebars-loader' },
    ],
  },
  plugins: [
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/service-worker/sw.js',
    }),
  ],
};
