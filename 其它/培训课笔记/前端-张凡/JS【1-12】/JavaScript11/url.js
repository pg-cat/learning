// 引入http 模块
//
var http = require('http');

// 查看用户访问的url
var url = require('url');

function start(){

  // 自定义函数，但是onrequest是一般默认的函数名字
  function onRequest(req,res){

    var urlname = url.parse(req.url).pathname;

    console.log(urlname);

    res.writeHead(200,{'Content-Type':'text/plain'});

    res.write('wo hai pa');

    res.end();

  }

  http.createServer(onRequest).listen(8388);

  console.log('Server is running');

}

start();
