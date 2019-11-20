var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      json:{
        arr:['课程','实战课程','就业班','专栏','猿问','手记'],
        imgsrc:'https://img1.sycdn.imooc.com/szimg/5d3ff547091ba29712000676.jpg'
      }
  });
});

module.exports = router;
