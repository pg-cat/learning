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

# brew
	
	包管理工具，和npm,apt等等是一致的，这里一般情况下，也是必备工具之一

	直接进入官网：https://brew.sh/index_zh-cn

	将命令复制之后，进行安装即可

	安装完毕之后，可以安装mongodb了

	brew install mongodb

# mongoDB

## mongoDB验证

	mongo -version  查看mongodb版本号

	在终端执行mongo 进入mongo命令行才行

## mongoDB概念

	SQL概念			mongoDB概念			说明
	database		database			数据库
	table 			collection 			表/集合
	row				document			行/文档
	column			field 				字段/域/格子
	index 	 		index 				索引

## mongoDB基本命令

	show dbs  查看所有的数据库

	use 数据库名称 进入某个数据库，如果数据库不存在，那么创建某个数据库。如果创建了数据库，但是没有向数据库内插入内容，那么该数据库不可见

	db.数据库名称.insert({"name":"zhangfan","age":"27"})  向数据库插入数据

	db.dropDatabase()  删除当前所在的数据库


	db.createCollection(name,options)  在当前数据库创建一个表，默认不填写options，虽然有很多参数，但是实用性不是特别强

	show collections 查看当前数据库都有哪些表

	db.表名称.drop()   删除表

	db.表名称.insert()  在某个表里插入字段

	db.表名称.remove(删除条件({"name":"zhangfan"}))	删除字段

	db.表名称.update({'title':'MongoDB 教程'},{$set:{'title':'MongoDB'}})	更新字段

## express如何使用mongoDB

	需要用mongoose 进行连接

	所以需要将该插件npm install到项目目录中

	下载好之后，在app.js（项目启动目录中，引入mongoose，并且测试是否可以连接）





















