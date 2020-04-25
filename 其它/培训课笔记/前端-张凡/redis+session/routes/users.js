var express = require('express');
var router = express.Router();
var cors = require('cors');

/* GET users listing. */
router.get('/',cors() ,function(req, res, next) {
  var user = {
    name : 'zhangfan',
    age:'27',
    address:'wuhan'
  }
  req.session.user = user;
  res.json(req.session.user);
});

router.get('/dier',cors() ,function(req, res, next) {
  if(req.session.user){
    var user = req.session.user;
    res.send(user);
  }else{
    res.send('没有信息');
  }
});

module.exports = router;
