## 模板渲染的登录状态的保持

### form 表单标签

- method

  提交的请求协议
  - post
  - get
  - put
  - push
  - download

- action

  提交的地址 url
  
  如果是模板引擎渲染，直接可以提交到短路由上

```jsx
<% if(message.show == false) { %>

<form method="get" action="/users/login">
  <input type="text" name="name" value="" placeholder="请输入用户名" />
  <input type="password" name="password" value="" placeholder="" />
  <input type="submit" value="确定" />
  <button type="submit">确定</button>
</form>

<% }else{ %>

  <h1>欢迎 <%= message.name %></h1>
  <form method="get" action="/users/loginout">
    <button>退出登录</button>
  </form>

<% } %>
```

### 使用 express-session 插件进行 session 缓存

- 缓存到服务器中的数据

```jsx
// 引入session 来保存你的用户信息
var session = require('express-session');

// 你的其他操作代码

// 使用 session 插件，在路由解析之前
app.use(session({
  // 信息是否加密
  secret:'secret',
  // 每次强制更新一次
  resave:true,
  // 更新时间
  saveUninitialized:false,
  cookie:{
    // 用户的信息在 session 中存储多久
    maxAge:1000*60*10
  }
}))
```

- 存储 session 信息

```jsx
// 设置 session
req.session.user = user;

// 退出登录，销毁 session 信息
req.session.cookie.masAge = 0;
// 另一种方法
req.session.destroy((err)=>{
  console.log(err);
})

res.send('退出登录');
```

## 前后台分离的登陆状态的保持

前后台分离，我们需要将信息存储到前台的 `localStorage` 里面，进行验证

但是，安全系数不高
