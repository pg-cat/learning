// 入口文件 导入多个模块，注入文件
var server = require('./server');
var router = require('./router');

console.log(router.route);

console.log(__filename);
console.log(__dirname);

server.start(router.route);
