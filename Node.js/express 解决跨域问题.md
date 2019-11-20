在 app.js 中添加以下代码：

```js
// 解析请求编码，需在路由解析之前
app.use(express.urlencoded());
app.use(express.json());
app.use(function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	res.header('Content-Type','application/json');
	next();
})
```