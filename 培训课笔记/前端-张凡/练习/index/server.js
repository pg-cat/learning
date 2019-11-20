// 规定了服务器具体的执行顺序
// 引入http 模块
const http = require('http');

// 查看用户访问的url
const url = require('url');

function start(routefun) {

  // 自定义函数，但是onrequest是一般默认的函数名字
  function onRequest(req, res) {

    var urls = url.parse(req.url).pathname;

    routefun(urls);

    res.writeHead(200, {
      'Content-Type': 'text/plain;charset=utf-8'
    });

    res.write('我是谁？');

    res.end();

  }

  http.createServer(onRequest).listen(8388);

  console.log('Server is running');

}
exports.start = start;