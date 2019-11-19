// 引入 exress
const express = require('express');
// 如果要读取或者操作文件，需要用 fs 模块
const fs = require('fs');

// 实例化一个 express 对象
// app 是常规的命名方式，不建议使用其他名称
const app = express();
// 设置模板文件的目录，并且制定 views 就是该目录下的页面
app.set('views','./views');
// 注册模板引擎，并且声明，我们的引擎用的是 ejs
app.set('view engine','ejs');

app.get('/',(req,res)=>{

  getData((DataJson)=>{
      console.log(DataJson);
      res.render('index',DataJson);
  })

});

// 重写一个方法，读取json文件
const getData = ( callBack ) =>{

  // undefined 、null 转化成布尔都是 false
  // 如果没有错误信息，此处的 err 就是 undefined 或者 null
  fs.readFile('./data.json',(err,data)=>{

      if(!err){
          //  将 json 对象转化为 JS 中的对象，并且赋值
          let jsonData = JSON.parse(data);
          callBack(jsonData);
      }else{
          throw err;
      }

  });

}



// app.get('/',(req,res)=>{
//
//   res.render('index',{
//     title:'这是页面标题',
//     content:'这是比较重要的内容'
//   });
//
// });
// app.get('/about',(req,res)=>{
//
//   res.render('about',{neirong:'这是关于页'});
//
// });

// 建立连接
// 当用户访问域名:端口号的时候，给用户发送什么
// app.get('/',(req,res)=>{
//
//     res.send('主页');
//
// });
//
// // 建立其他链接路由
// // 当访问/new的时候，给前台返回这是新闻业
// app.get('/new',(req,res)=>{
//
//     res.send('这是新闻页');
//
// });
//
// // 建立其他链接路由
// // 当访问/about的时候，给前台返回这是关于页
// app.get('/about',(req,res)=>{
//
//     res.send('关于页');
//
// });
//
// // 定义客户端可以访问哪个文件夹
// app.use('/static',express.static('static'));

// 规定监听的端口号，并且给后台终端打印信息
app.listen(8080,()=>{
  console.log('Server is running');
});
