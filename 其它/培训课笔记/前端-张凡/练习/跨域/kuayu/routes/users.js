var express = require('express');
var router = express.Router();

var cors = require('cors');

/* GET users listing. */
router.post('/',cors(),function(req, res, next) {
  // 通过jsonp处理跨域问题
  var msg={
    status:200,
    data:'这是一个jsonp响应'
  }
  res.send(msg);
});

module.exports = router;
