const express = require('express');

const router = express.Router();

const fs = require('fs');

const path = require('path');

// 设定读取的文件的路径
const study = '/public/students.json';

// 获取数据接口
router.get('/readitem',function(req,res){


	// 读取study文件，给用户返回
	fs.readFile(path.join(__dirname + study),'utf8',function(err,data){

		// 判断是否出现错误，如果有错误，那么需要给用户
		if(err){

			return res.send(err);

		}

		res.status(200).send(data);

	})


});

router.post('/create',function(req,res){

	// 设置model层
	let newStudent = {

		id:Date.now(),

		name:req.body.name,

		age:req.body.age,

		class:req.body.class,

		creatTime:new Date().toLocaleString(),

		updateTime:new Date().toLocaleString()

	}

	// 要把newStudent写入文件，但是在写的时候，需要注意，不要直接覆盖，先读取之前的内容，然后拼接之后，写入新的json

	fs.readFile((__dirname + study),'utf8',function(err,data){

		if(err) throw err

		try {

			data = JSON.parse(data)

		} catch(error){

			return res.status(200).send(error)

		}

		data.push(newStudent);

		fs.writeFile(path.join(__dirname + study),JSON.stringify(data),function(err){
			res.status(200).send(err);
		})


	})

})

module.exports = router;