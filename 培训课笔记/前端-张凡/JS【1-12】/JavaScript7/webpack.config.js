const HtmlWebpackPlugin = require('html-webpack-plugin');

// 引入了系统中的位置模块
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const viewport = {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'};
const halfviewport = {viewport: 'width=device-width, initial-scale=0.5, shrink-to-fit=no'};

module.exports = {
  mode: 'development',
  entry: './main.js', // 入口文件  main.js
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出地址是./dist文件夹
    filename: 'bundle.js' // 输出文件的名称 bundle.js
  },
  plugins: [
    // new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'MyApp',
      filename: '/dist/index.html',
      inject: true
    })
  ],
  module: {
    rules: [{
        test: /\.css$/, // 解析css style的插件，以.css未结尾的文件都会被解析并且压缩
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/, // 读取图片的插件，以以下几个东西结尾的文件都会被解析
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.less$/, // 插件解析顺序由下向上，因此以下插件排序为 style css less
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'这是webpack的app',
      inject:'head',
      favicon:'dist/static/img/icon.jpeg',
      meta:halfviewport
    })
  ]

}