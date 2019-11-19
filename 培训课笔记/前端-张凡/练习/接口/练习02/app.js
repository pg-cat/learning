// 引入相关模块及文件
const express = require('express');
const app = express();
const routers = require('./router');
const mongoose = require('mongoose');

// 连接当前数据连
mongoose.connect('mongodb://localhost:27017/cat');

// 实例化监听对象
const db = mongoose.connection;

// 测试连接是否成功
db.on('open',()=>{
  console.log('连接成功')
})
db.on('error',()=>{
  console.log('连接失败')
})

// 解析请求编码
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'));

// 携带安全说明用于解决跨域报错
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'application/json');
  next();
});

app.use('/',routers);

app.listen(3000,console.log('服务器已启动 Go'));