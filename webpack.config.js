const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public'),
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
