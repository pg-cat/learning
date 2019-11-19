const express = require('express');

const router = express.Router();

const Ppt = require('./ppt.js');

// 查询数据库里面的所有图片信息

router.get('/getMsg', function (req, res) {

	Ppt.find({}, function (err, data) {

		if (err) throw err;

		if (data) {

			res.send(data);

		}

	})

})

// 向数据库添加内容
router.post('/addMsg', function (req, res) {

	//建立一个初步模型
	let imgmsg = {

		id: req.body.id,

		imgTitle: req.body.imgTitle,

		imgurl: req.body.imgurl,

		ahref: req.body.ahref

	}

	Ppt.create(imgmsg, function (err, data) {

		if (err) {

			throw err;

		} else {

			res.send(imgmsg);

		}

	})

})

// 删除内容
router.get('/removeMsg', function (req, res) {

	Ppt.remove({
		id: req.query.id
	}, function (err, data) {

		if (err) {
			throw err;
		} else {

			res.send('删除成功');

		}

	})

})

// 修改轮播图
router.get('/findMsg', function (req, res) {

	Ppt.find({
		id: req.query.id
	}, function (err, data) {

		if (err) throw err;

		if (data) {

			res.send(data);

		}

	})

})

router.post('/updateMsg', function (req, res) {
	console.log(req.body);

	Ppt.update(req.body.changeDate, req.body.imgmsg, function (err, data) {
		if (err) throw err;

		if (data) {

			res.send(data);

		}
	})

})


module.exports = router;