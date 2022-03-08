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
    faced3: './js/face/faced3.js',
    cssColor: './js/cssColor.js',
    interactMouse: './js/interactMouse.js',
    barchart: './js/barchart.js',
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
    new HtmlWebpackPlugin({
      template: 'html/template.html',
      filename: 'faced3.html',
      chunks: ['faced3'],
      title: 'react & d3 做一個笑臉',
    }),
    new HtmlWebpackPlugin({
      template: 'html/template.html',
      filename: 'cssColor.html',
      chunks: ['cssColor'],
      title: 'css Color 表',
    }),
    new HtmlWebpackPlugin({
      template: 'html/template.html',
      filename: 'interactMouse.html',
      chunks: ['interactMouse'],
      title: 'interactMouse',
    }),
    new HtmlWebpackPlugin({
      template: 'html/template.html',
      filename: 'barchart.html',
      chunks: ['barchart'],
      title: 'barchart',
    }),
  ],
  devServer: {
    port: 3000,
    hot: true,
    host: '0.0.0.0',
    allowedHosts: 'all',
  },
};
