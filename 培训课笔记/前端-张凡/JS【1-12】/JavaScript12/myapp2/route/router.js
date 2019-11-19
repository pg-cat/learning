var express = require('express');

var router = express.Router();

var indexContent = ['张顺','张船','张凡'];

router.get('/',(req,res)=>{

    res.render('index',{
      content:indexContent,
      login:false,
      user:'已经登陆'
    });

});

router.get('/new',(req,res)=>{

    res.send('这是新闻页');

});

router.get('/about',(req,res)=>{

    res.send('关于页');

});

module.exports = router;
