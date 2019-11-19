// 引入模块，实例化对象
//
var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('one',function(a,b){

  console.log(a,b);

  emitter.emit('two',a,b);

});

emitter.on('two',function(a,b){
  
  console.log(a,b);

});

emitter.emit('one','字母a','字母b');

console.log('server stop');
