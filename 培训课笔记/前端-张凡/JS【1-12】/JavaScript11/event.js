// 引入events模块
var events = require('events');

// 创建一个events对象
var eventEmitter = new events.EventEmitter();

// 声明一个函数
var content = function (){

  console.log('这里是输出的第一部分内容');

  // 从触发第二个事件
  eventEmitter.emit('dataContent');

}

// 绑定第一个函数的事件
eventEmitter.on('contentStart',content);

// 绑定事件
eventEmitter.on('dataContent',function(){

    console.log('第二次输出内容');

})

// 按照以上的逻辑进行推断，第二个函数绑定了事件，第一个函数也应该绑定事件
//

eventEmitter.emit('contentStart');

console.log('server stop');
