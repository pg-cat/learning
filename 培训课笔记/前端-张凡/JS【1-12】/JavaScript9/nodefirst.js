// 引入exress
const express = require('express');
// 如果要读取或者操作文件，需要用fs模块
//
const fs = require('fs');

// 实例化一个express对象
// app是常规的命名方式，不建议使用其他名称
const app = express();

app.set('views','./views');

app.set('view engine','ejs');





app.get('/',(req,res)=>{

  res.render('index',{
    title:'这是页面标题',
    content:'这是比较重要的内容'
  });

});
app.get('/about',(req,res)=>{

  res.render('about',{neirong:'这是关于页'});

});

// 建立连接
// 当用户访问域名:端口号的时候，给用户发送什么
app.get('/',(req,res)=>{

    res.send('主页');

});

// 建立其他链接路由
// 当访问/new的时候，给前台返回这是新闻业
app.get('/new',(req,res)=>{

    res.send('这是新闻页');

});

// 建立其他链接路由
// 当访问/about的时候，给前台返回这是关于页
app.get('/about',(req,res)=>{

    res.send('关于页');

});

// 定义客户端可以访问哪个文件夹
app.use('/static',express.static('static'));

// 规定监听的端口号，并且给后台终端打印信息
app.listen(8080,()=>{
  console.log('Server is running');
});
