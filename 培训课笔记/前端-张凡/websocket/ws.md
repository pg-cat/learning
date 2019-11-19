# websock模块

## 服务器插件:ws

  安装插件：cnpm install ws --save-dev

  在app.js中，引入ws模块，实例化WebSocketServer函数，监听端口

## html使用websocket

  用实例化WebSocket的方式监听端口并且连接数据

  var sock = new WebSocket('ws://localhost:3000');

  onopen事件，测试连接是否可以成功

  sock.onopen = (params)=>{

    console.log('连接成功');

    console.log(params);

  }

  如果连接失败，调用onerror函数

  sock.onerror = (error) => {
    console.log('连接失败');

    console.log(error);
  }

  前台向后台发送数据，在onopen函数中添加sock.send('发送的数据')

  后台接收，需要在connection里面嵌套message函数

  wss.on('connection',function(ws){

    ws.on('message',(message)=>{

      console.log(message);

    })

  });

  后台给前台递交数据，前台用message接收

  sock.onmessage = function(ms){

    console.log(ms);

  }

  后台发送数据:send函数

  ws.send('我是后台给前台的数据');
  
