// redis 和 express 连接的插件叫做 ioredis
var ioRedis = require('ioredis');
var redis = new ioRedis();

// 在又得框架中，没有open这个属性
redis.on('open',function(){
  console.log('连接成功');
});

redis.on('error',function(){
  console.log('连接失败');
});

exports.redis = redis;
