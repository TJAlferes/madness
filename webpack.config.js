'use strict';
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    //contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3003',
        pathRewrite: {
          '^/api' : ''
        },
        changeOrigin: true,
        secure: false
      }
    }
  },
  devtool: 'cheap-module-eval-source-map', // or cheap-module-source-map ?
  entry: './src/index.js',
  //entry: './src/devServer/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                autoprefixer({
                  browsers: [
                    "> 1%",
                    "last 2 versions"
                  ]
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(ico|png|svg|jpe?g|gif)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/public/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new VueLoaderPlugin()
  ]
};