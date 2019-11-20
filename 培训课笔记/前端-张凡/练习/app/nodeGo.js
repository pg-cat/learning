// 引入 fs ，可对文件进行操作
const fs = require('fs');

// 引入 express ，并实例化
const express = require('express');
const app = express();

// 引入 ejs 模板，并声明模板类型为 ejs
app.set('views', './views');
app.set('view engine', 'ejs');

// 对访问进行响应
app.get('/', (req, res) => {
  getData((dataJson) => {
    res.render('index', dataJson)
  })
});

// 定义获取数据的 getData 方法
const getData = (callback) => {
  fs.readFile('./data.json', 'utf-8', (err, data) => {
    if (!err) {
      let fsData = JSON.parse(data);
      callback(fsData);
    } else {
      throw err;
    }
  })
}

// 监听端口 3000 ，并给予提示服务成功启动
app.listen(3000, () => {
  console.log('服务已启动 go~')
})