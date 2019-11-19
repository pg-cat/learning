// 引入相关模块及文件
const express = require('express');
const router = express.Router();
const mongo = require('./mongo');

// 注册
router.post('/regist', (req, res) => {

  // 用户的数据
  let postDate = {
    userName: req.body.userName,
    passWord: req.body.passWord,
    age: req.body.age
  }

  // findOne 方法查询用户数据是否已被注册
  mongo.findOne({
    userName: postDate.userName
  }, (err, data) => {

    if(err) throw err;

    // 若用户名已被注册
    if (data) {
      res.send('99')
    } else {

      // create 方法向数据表中插入数据
      mongo.create(postDate, (err, data) => {
        if (err) throw err;
        res.send('100')
      })

    }

  })


})

// 登录
router.post('/login', (req, res) => {

  // 获取用户输入的数据
  let postDate = {
    userName: req.body.userName,
    passWord: req.body.passWord
  }

  // 查询数据库的用户名是否存在
  mongo.findOne({
    userName: postDate.userName
  }, (err, data) => {
    if (err) throw err;
    if (data) {

      // 当用户名存在，查询密码是否正确
      mongo.findOne({
        userName: postDate.userName,
        passWord: postDate.passWord
      }, (error, dataUser) => {
        if (error) throw error;
        if (dataUser) {
          res.send('200')
        } else {
          res.send('201')
        }
      })

    } else {
      console.log('用户名不存在')
      res.send('101')
    }
  })

})

// 暴露此文件
module.exports = router;