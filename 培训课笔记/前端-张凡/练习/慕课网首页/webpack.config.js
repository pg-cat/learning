// 引入了系统中的位置模块
const path = require('path');

var webpack = require('webpack');

// publicPath 动态监听3000端口，如果是webpack服务，那么3000端口的根目录就是webpack的
// 如果是express 服务，那么3000端口就是express的
var publicPath = 'http://localhost:3000/';

// webpack-hot-middleware  作用webpack-dev-server一致，自动由less生成css，但是需要刷新页面
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
  mode:'development',
  entry:{
    index:['./client/index',hotMiddlewareScript],
    list:['./client/list',hotMiddlewareScript]
  },
  output:{
    filename:'./[name]/bundle.js',
    path:path.resolve(__dirname,'./public'),  // webpack产生文件的目录是localhost:3000/public
    publicPath:publicPath   //  规定公共地址localhost:3000
  },
  module:{
    rules:[
      {
        test:/\.css$/,    // 解析css style的插件，以.css未结尾的文件都会被解析并且压缩
        use:[
          'style-loader',
          'css-loader',
        ]
      },
      {
        test:/\.(png|svg|jpg|gif|jpeg|eot|svg|ttf|woff|woff2)$/, // 读取图片的插件，以以下几个东西结尾的文件都会被解析
        use:[
          'file-loader'
        ]
      },
      {
        test:/\.less$/,
        use:[
          'style-loader',
          'css-loader',
          'less-loader',
        ]
      }
    ]
  },
  plugins:[
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()  //  不需要刷新页面，css以及js会自动更新
  ]
}
