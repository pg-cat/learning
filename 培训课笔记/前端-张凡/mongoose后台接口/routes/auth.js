const express = require('express');
const router = express.Router();

// 作者
const Auth = require('../model/auth');

router.get('/add',function(req,res){
  console.log('接口被访问了？');
  let authOne = {
    authid:1,
    uuid:1,
    authclass:[1,2],
    authreader:1
  }

  Auth.create(authOne,function(error,data){
    if(error) throw error;
    console.log('添加成功');
    res.send(data);
  })
})

module.exports = router;