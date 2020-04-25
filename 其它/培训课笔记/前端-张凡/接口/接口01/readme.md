# express接口基本原理

## 接口需要使用的方法

### express.static()

	托管静态文件，一般书写成:app.use(express.static('public'))

### express.json()

	用来解析请求体的内容的，默认为空，只有在发起请求的时候，才会被填充

### express.urlencoded

	和上面的方法一样，是用来解析一定(application/x-www-form-urlencoded)的编码类型的数据的

### express.Router 创建一个路由对象

## response 方法

	response.header()    设置响应头

	response.status()    设置响应的HTTP状态

	response.end()   结束响应的进程

	response.send()   想浏览器发送数据

##  request.body  请求体

##  前后台的两种架构方式

	之前用express和ejs模板进行搭配，数据直接在页面上，需要把数据具体进行页面解析

	现在用的是ajax请求，数据是之后单独进行返回的，所以，我们需要在前台进行进一步处理