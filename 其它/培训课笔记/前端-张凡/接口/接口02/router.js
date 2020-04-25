const express = require('express');

const router = express.Router();

const fs = require('fs');

const path = require('path');

const User = require('./user');

// 注册
router.post('/reg',function(req,res){

	var postDate = {

		username : req.body.username,

		password : req.body.password,

		age : req.body.age

	}
	// 在插入数据之前，需要测试用户名是否被注册
	// findOne 查询是否唯一
	User.findOne({username:postDate.username},function(err,data){


		// 如果查询到内容，此处data是由内容的
		if(data){

			// console.log(data);

			res.send(data);

		}else{

			// user.create 插入数据
			User.create(postDate,function(err,data){

				if(err) throw err;

				console.log('注册成功');

				// 注册成功之后，直接查看所有用户  
				// find 查询数据，后面是查询的条件
				User.find({},function(err,data){

					if(err) throw err;

					res.send(data);

				})

			})

		}

	})

	

})

// 检测用户登录
router.post('/login',function(req,res){

	var postData = {

		username:req.body.username,

		password:req.body.password

	}

	// 查询用户名和密码作为条件时数据库里面是否有符合的内容
	User.findOne({

		username:postData.username,

		password:postData.password

	},function(err,data){

		if(err) throw err;

		if(data){

			res.send('1');

		}else{

			res.send('0');

		}

	})

})





module.exports = router;