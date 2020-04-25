const express = require('express');

const app = express();

const router = require('./router.js');

//引入mongoose
const mongoose = require('mongoose');

//连接当前数据库
mongoose.connect('mongodb://127.0.0.1:27017/muke');

//实例化监听对象
var db = mongoose.connection;

//测试连接是否成功
db.on('open',function(){
	console.log('连接成功');
})

db.on('error',function(){
	console.log('连接失败');
})

// 解析请求编码
app.use(express.urlencoded());

app.use(express.json());


app.use(function(req,res,next){

	res.header('Access-Control-Allow-Origin','*');

	res.header('Content-Type','application/json');

	next();

})

app.use('/',router);


app.listen(3000,console.log('Server is running'));