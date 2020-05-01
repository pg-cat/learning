var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {
    title: 'Express'
  });
});

// 用户访问记录
const Time = require('../model/findip');

router.get('/addFindIP', function (req, res) {

  // 获取前台发送的数据
  let addOne = {
    ip: req.ip,
    height: Number(req.query.height),
    todate: req.query.todate,
    godate: req.query.godate
  };

  console.log(addOne);

  // 添加数据进入数据库
  Time.create(addOne, function (err, data) {
    if (err) {
      throw err;
    } else {
      res.send(addOne);
    }
  })

})

module.exports = router;