// 引入相关模块及文件
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// 获取数据所在位置
const people = '/public/people.json';

// 服务器向用户发送响应数据，接口名称 readme
router.get('/readme',(req,res)=>{

  // 读取数据文件
  fs.readFile(path.join(__dirname + people),'utf8',(err,data)=>{

    // 判断获取文件是否出错，并向用户反馈此错误
    if(err){
      return res.send(err);
    }

    // 此时响应已经成功，状态码为 200 ，反馈并显示此数据文件内容
    res.status(200).send(data);

  })

})

// 用户向服务器发送请求，服务器更新数据，接口名称 killme
router.post('/killme',(req,res)=>{

  // 从用户页面获取需要发送的数据
  let newPeople = {
    id:Date.now(),
    name:req.body.name,
    sex:req.body.sex,
    age:req.body.age,
    firstTime:new Date().toLocaleString,
    newTime:new Date().toLocaleString
  }

  // 读取原数据文件
  fs.readFile(path.join(__dirname + people),'utf8',(err,data)=>{

    // 判断是否出错，并在命令行显示，但不停止命令，并继续向下运行
    if(err) throw err;

    // 尝试获取文件内容，并捕获可能出现的错误
    try{

      // 格式化（转换）文件内容的 JSON 字符串为对象
      data = JSON.parse(data);

    }catch(error){

      // 此时请求已经成功，状态码为 200 ，而出现的错误属于意外情况
      return req.status(200).send(error);

    }

    // 添加新数据到原数据内容，并转化为 JSON 字符串
    data.push(newPeople);
    data = JSON.stringify(data);

    // 写入并覆盖原数据文件的内容
    fs.writeFile(path.join(__dirname + people),data,err=>{
      res.status(200).send(err);
    })

  })

})

// 暴露此文件
module.exports = router;