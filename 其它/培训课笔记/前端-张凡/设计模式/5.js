//  把两个文件的内容读取出来，添加到一个数组中
//  异步
var fs = require('fs');

var arr = [];
var i = 0;
function fn(data,index){
  arr[index] = data;
  if(++i == 2){
    console.log(arr);
  }
}

fs.readFile('./1.txt','utf8',function(error,data){

  fn(data,0);

});

fs.readFile('./2.txt','utf8',function(error,data){

    fn(data,1);

});
