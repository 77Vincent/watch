const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin') 

const resolve = path.resolve

module.exports = {
  entry: {
    client: resolve('./index.js'),
  },
  output: {
    path: resolve('./build'),
    filename: 'build.[hash:4].js',
    chunkFilename: 'chunks/[name].[hash:4].js',
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        options: {
          plugins: [
            ['import', { libraryName: 'antd', style: true }]
          ]
        },
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style',
          use: [
            { loader: 'css', options: { sourceMap: true } }
          ]
        }),
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style',
          use: [
            { 
              loader: 'css', 
              options: { sourceMap: true }
            },
            { 
              loader: 'less', 
              options: { sourceMap: true }
            }
          ]
        }),
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        options: {
          limit: 8192,
          name: 'img/[name].[hash:4].[ext]'
        }
      },
      {
        test: /\.(woff|eot|ttf|svg|gif)$/,
        loader: 'url',
        options: {
          limit: 8192,
          name: 'font/[name].[hash:4].[ext]'
        }
      },
    ],
  },
  devServer: {
    contentBase: path.resolve('.'),
    historyApiFallback: false,
    port: 3000,
    host: 'localhost',
    hot: false,
    stats: { colors: true }
  },
  plugins: [
    // 在打包前先移除build文件夹
    new CleanWebpackPlugin(['build'], {
      root: resolve(),
      verbose:  true,
      dry:      false
    }),
    // 提取css
    new ExtractTextPlugin('build.[hash:4].css'),
    // 将打包后的资源注入到html文件内    
    new HtmlWebpackPlugin({
      template: resolve('./index.html'),
    })
  ]
}
