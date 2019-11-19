const WebSocket = require('ws');
const WebSocketServer = WebSocket.Server;
const wss = new WebSocketServer({ port:3000 });

wss.on('connection',function(ws){

  ws.on('message',(message)=>{

    // 后台接收name
    message = JSON.parse(message);

    // 如果type是name的话，那么把他当做用户的昵称进行处理
    if( message.type == 'name' ){
      ws.userName = message.data;
      return;
    }

    // 去重操作,假如说网络连接不好的话，前台有可能发送多次请求，所以在这里需要去掉重复信息
    wss.clients.forEach((client)=>{
      if(client != ws){

        // 广播发送给所有的客户端
        client.send(JSON.stringify({
          name : ws.userName,
          data : message.data,
          time : message.time
        }));

      }
    });

  })

});

console.log('服务已启动~ Go')