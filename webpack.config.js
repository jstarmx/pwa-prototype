const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = [
  {
    entry: './src/renderers/component-renderer.js',
    output: {
      filename: 'component-renderer.js',
      path: path.resolve(__dirname, 'public'),
      library: 'ComponentRenderer',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
      ],
    },
    plugins: [
      new WorkboxPlugin.InjectManifest({
        swSrc: './src/service-worker/sw.js',
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, 'src/index.js'),
          to: path.resolve(__dirname, 'public/index.js'),
        },
      ]),
    ],
  },
  {
    entry: './src/renderers/template-renderer.js',
    output: {
      filename: 'template-renderer.js',
      path: path.resolve(__dirname, 'public'),
      library: 'TemplateRenderer',
    },
    module: {
      rules: [
        { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
        {
          test: /\.handlebars$/,
          exclude: /node_modules/,
          loader: 'handlebars-loader',
        },
      ],
    },
  },
];
