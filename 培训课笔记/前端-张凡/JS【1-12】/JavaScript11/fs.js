// 引入文件模块
var fs = require('fs');

// 读取文件
var data = fs.readFileSync('input.txt');

console.log(data.toString());

console.log('文件读取结束');
