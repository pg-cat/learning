const express = require('express');
const path = require('path');
const consolidate = require('consolidate');
// const mongoose = require('mongoose');
const webpack = require('webpack');

const app = express();
const port = 3000;
// 需要打开页面reload
const reload = require('reload');

// 按照之前的写法，需要注册模板引擎
// 如果要使用consolidate,也就是在html文件里写ejs语法的话，需要添加下面这行代码
app.engine('html', consolidate.ejs);
app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, './server/views'));


// 引入成对的插件
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
// 引入webpack的配置文件
const webpackDevConfig = require('./webpack.config.js');

// 导入配置文件到webpack里面
const compiler = webpack(webpackDevConfig);

// 作为静态文件，导入webpack,参照之前的static
// 因为要热更新，所以他需要将public原来生成的实体内容，放入缓存中
// 这里需要规定，把谁放到缓存里，并且需要不需要出现具体的提示信息
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackDevConfig.output.publicPath, //直接把localhost:3000目录赋值给了热更新的目录，也就是说在这里设置的时候我们没有添加public
  noInfo: true,
  stats: {
    colors: true
  }
}));
app.use(webpackHotMiddleware(compiler));


// //连接当前数据库
// mongoose.connect('mongodb://127.0.0.1:27017/imooc');
// //实例化监听对象
// var db = mongoose.connection;
// //测试连接是否成功
// db.on('open',function(){
// 	console.log('连接成功');
// })
// db.on('error',function(){
// 	console.log('连接失败');
// })
// // 解析请求编码
// app.use(express.urlencoded());
// app.use(express.json());
// // 解决跨域报错
// app.use(function(req,res,next){

// 	res.header('Access-Control-Allow-Origin','*');

// 	res.header('Content-Type','application/json');

// 	next();

// })


// 引入路由
require('./server/router/route')(app);


// 设置static文件夹路径
// app.use 然后调用express.static(静态资源目录)
// 图片，音乐，视频可以放在这个目录中
app.use(express.static(path.join(__dirname, 'static')));


// 不需要var server = http.createServer
// 直接用app.listen可以启动服务
reload(app);

// server.listen(port, function () {
app.listen(port, function () {
  console.log('Server is running on port:3000');
})

//  webpack-dev-middleware 和 webpack-hot-middleware
//  HotModuleReplacementPlugin
//  npm-install-webpack-plugins
//
//  第一种情况，express -e 项目名称
//  第二种情况  npm init  导入express 用来写项目