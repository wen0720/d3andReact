const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicPath = '';
const DEV_MODE = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './js/index.js',
    app1: './js/app1.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name].[contenthash:8].js',
    publicPath,
  },
  devtool: DEV_MODE ? 'inline-source-map' : false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'html/face.html',
      filename: 'face.html',
      chunks: [],
      title: 'face',
    }),
    new HtmlWebpackPlugin({
      template: 'html/template.html',
      filename: 'app1.html',
      chunks: ['app1'],
      title: '第一個 react & d3',
    }),
  ],
  devServer: {
    port: 3000,
    hot: true,
    host: '0.0.0.0',
    allowedHosts: 'all',
  },
};
