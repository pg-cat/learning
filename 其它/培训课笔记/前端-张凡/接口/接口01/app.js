const express = require('express');

const app = express();

// 引入路由文件

const studentRouter = require('./router.js');

// 解析请求编码
app.use(express.urlencoded());

app.use(express.json());

app.use(express.static('public'));

app.use(function(req,res,next){

	res.header('Access-Control-Allow-Origin','*');

	res.header('Content-Type','application/json');

	next();

})

app.use('/',studentRouter);

app.listen(5000,console.log('Server is running'));