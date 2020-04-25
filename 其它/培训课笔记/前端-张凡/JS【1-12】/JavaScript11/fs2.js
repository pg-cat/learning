// 加载文件读取模块
var fs = require('fs');

fs.readFile('input1.txt',function(err,data){

  if(err)

    return console.log(err);

  console.log(data.toString());

});

console.log('server stop');
