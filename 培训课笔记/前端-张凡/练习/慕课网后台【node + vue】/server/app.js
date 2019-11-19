const express = require('express');
const mongoose = require('mongoose');

const app = express();
const router = require('./router/router');

//连接当前数据库
mongoose.connect('mongodb://localhost:27017/imooc');

//实例化监听对象
var db = mongoose.connection;

//测试连接是否成功
db.on('open',function(){
	console.log('连接成功');
})
db.on('error',function(){
	console.log('连接失败');
})

// 解析请求编码，需在路由解析之前
app.use(express.urlencoded());
app.use(express.json());
app.use(function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	res.header('Content-Type','application/json');
	next();
})

app.use('/',router);

app.listen(8080,console.log('【8080】Server is running'));