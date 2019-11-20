// 引入express文件
var express = require('express');

var app = new express();

var path = require('path');

console.log(path);

function start(router){

  // 规定了views层的文件夹路径
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  app.use('/',router);

  app.listen('8388',function(){

    console.log('Server is running');

  });

}

exports.start = start;
