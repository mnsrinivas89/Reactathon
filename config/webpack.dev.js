process.env.NODE_ENV = 'development';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 devtool: 'cheap-module-source-map',
 entry: {
   as: './App/index'
 },
 output: {
   path: path.join(__dirname, '../build/'),
   filename: '[name].js',
   chunkFilename: '[name].chunk.js'
 },
 module: {
   loaders: [
     {
       test: /\.js$/,
       loaders: 'babel-loader',
       include: path.join(__dirname, '../App'),
       exclude: '/node_modules/',
       query: {
        presets: ['es2015', 'react']
      }
     },
     {
       test: /\.css$/,
       loader: ExtractTextPlugin.extract({
         fallback: 'style-loader',
         use: 'css-loader'
       })
     },
     {
         test: /\.(png|jpg|gif)$/,
         loader: 'url-loader?limit=10000&publicPath=./&name=assets/images/[name]-[sha512:hash:base64:7].[ext]'
       },
       {
         test: /\.(ttf|eot|woff|woff(2))(\?v=[0-9]\.[0-9]\.[0-9])?$/,
         loader: 'file-loader?publicPath=./&name=assets/fonts/[name].[ext]',
         exclude: path.join(__dirname, '../src/assets/fonts/')
       },
       {
         test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
         loader: 'file-loader?publicPath=./&name=assets/images/[name].[ext]',
         exclude: path.join(__dirname, '../src/assets/images/')
       }
   ]
 },
 plugins: [
   new HtmlWebpackPlugin({
     template: 'public/index.html',
     inject: 'body'
   }),
   new webpack.HotModuleReplacementPlugin(),
   new ExtractTextPlugin('common.css'),
   new webpack.NoEmitOnErrorsPlugin()
 ],
 devServer: {
   hot: true,
   contentBase: '.',
   stats: 'minimal',
   proxy: {
     '/v1/*': {
       target: 'http://localhost:8080',
       secure: false        
     }
   }
 }
};

