# node

它是运行在服务器上面的 javascript

## 测试电脑是否可以使用 node

写一个 js 文件，console.log 某个内容

```js
// 此为 abc.js 文件内容
console.log(13)
```

之后再控制台用命令行 node 文件名称 进行访问：

```cmd
node abc.js
// 命令行输出 13 即为正常
```

如果能够打印出来，那么说明 node 可以进行使用

## 引入模块

需要使用 require 指令来引入系统自带的或者第三方的模块，来完成相应的服务/功能

### http 模块

http

超文本传输协议，所有的网站都是基于该协议进行运行的

## 通过 express 来建立服务

目的：理解建立服务，网页访问，路由，静态资源

### express 的准备工作

在本地进行依赖安装，也就是说在本地执行 npm install express --save

> 对于现在比较新的版本，建议使用 npm install -g express-generator
>> - 两者安装其一即可，安装完成后使用命令行命令 express -v 进行测试
>> - 快速创建项目的命令 express test -e ，其中 test 为你创建的项目名称

### 改装刚才的测试文件

- 引入 express 模块

```js
var express = require('express');
```

- 实例化对象

```js
var app = express();

app.get('/',function(request,response){
  // 具体的请求回调参数
});
```

### request 对象

request 对象表示 HTTP 请求，包含了请求的查询字符串，参数，内容，http 头部等属性

### response 对象

response 表示 HTTP 的响应，在收到请求时，向客户端发送的HTTP 相应数据

### 路由

由路由决定服务器给客户端返回什么响应，通过路由以及 get / post 的区分，我们可以进行不同的处理方式

- get 请求

  可以用地址栏直接访问成功

- post 请求

  从地址栏无法访问，如果需要访问，可能要用不同的接口进行请求

  在用 ajax 请求 post 接口的时候，有一个常见但是不好处理的错误，叫做跨域:

  ```
  SyntaxError: Failed to execute 'open' on 'XMLHttpRequest': Invalid URL
  ```

  或

  ```
  Access to XMLHttpRequest at 'http://127.0.0.1:8080/about' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
  ```

### 读取本地的静态文件

```js
app.use(express.static('文件路径'));
```

### 一般的 ejs 模板

EJS 是简单的模板，我们一般情况下会使用该模板，进行页面渲染

```
npm install ejs --save
```

需要在服务页面，进行 ejs 配置：

- 设置模板文件的目录，并且制定 views 就是该目录下的页面

```js
app.set('views','./views');
```

- 注册模板引擎，并且声明，我们的引擎用的是 ejs

```js
app.set('view engine','ejs');
```

- 如果要使用模板引擎，需要用到 res.render 方法

```js
app.get('/',(req,res)=>{
  res.render('index',data);
});

// index 对应的模板引擎的名字
// data 向该模板传递什么信息
```

## 文件模块 fs

作用是用于读取电脑中的文件，用来显示或者在服务端进行使用

使用文件模块的时候，需要引入 fs 文件

```js
var fs = require('fs');
```

读取文件的函数叫做 readFile('文件名称')

```js
fs.readFile('data.txt',function(err,data){
  // 进行一些操作
})
```

## 回调函数

在 node 中，几乎所有的系统函数都可以使用回调，回调函数是用来判断程序执行是否成功的关键

这里以 readFile 为例：

```js
fs.readFile('input.txt',function(err,data){

  if(err) return console.log(err);

  console.log(data.toString());

})
```

- err

  代表出现的错误，如果出现错误，那么该错误会赋值到 err 变量上面

- data

  代表你读取的文件的内容，或者函数执行的目的


## 事件机制

你需要自定义事件，并且在某个条件下触发某个事件，我们经常会用 node.js 语言写一个链式反应，第一个事件执行完毕，触发第二个事件

```js
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

eventEmitter.emit('contentStart');

console.log('server stop');
```

### eventEmitter.on 绑定事件

声明一个字符串，作为事件的名称，同时他会对应一个函数

- 当该事件被触发之后，会执行这个函数

### eventEmitter.emit 触发事件

## Buffer 对象

js 只有字符串数据类型，没有二进制数据类型，所以在 tcp 流需要使用二进制的时候，特此添加了 buffer 对象

- 可以将任何数据转化成buffer对象，或者可以定义 buffer

### Buffer 对象和字符集编码

```js
var 变量 = Buffer.from('要解析的字符串','转化的类型');

变量.toString('别的数据类型读取');
```

- 存储

  数据->按照规则转化成 二进制 -> Buffer 对象 -> 存储在电脑中

- 读取

  二进制本地代码 -> Buffer 对象处理 -> 具体数据

## 分割路由

  之前用 node 原生语言，写过一个监听端口的服务器，但是一般情况下，我们会把路由和服务分开


