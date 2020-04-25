const express = require('express');
const router = express.Router();


// 作者信息
const Auth = require('../model/auth');

// 添加
router.get('/add', function (req, res) {

	let authOne = {
		authid: 3,
		uuid: 1,
		authclass: [1, 2],
		authreader: 1
	}

	Auth.create(authOne, function (error, data) {
		if (error) throw error;
		console.log('添加成功');
		res.send(data);
	})

})

// 删除
router.get('/rem', function (req, res) {

	Auth.remove({
		authid: 2
	}, function (error, data) {
		if (error) throw error;
		console.log('删除成功');
		res.send(data);
	})

})

// 修改
router.get('/up', function (req, res) {

	Auth.update({
		authid: 1
	}, {
		authclass: [2, 3]
	}, function (error, data) {
		if (error) throw error;
		console.log('修改成功');
		res.send(data);
	})

})

// 查询
router.get('/find', function (req, res) {

	Auth.find({
		authid: 3
	}, function (error, data) {
		if (error) throw error;
		console.log('查询成功');
		console.log(data);
		res.send(data);
	})

})


// 课程信息
const War = require('../mongo/war');

// 查询数据库里面的所有信息
router.get('/getTableList', function (req, res) {

	// 查询所有数据
	War.find({}, function (err, data) {

		if (err) throw err;

		// 响应请求，返回查询到的所有数据
		if (data) {
			res.send(data);
		}

	}).skip((Number(req.query.num) - 1) * Number(req.query.pageLen)).limit(Number(req.query.pageLen));

})

// 查询表内数据的长度
router.get('/listTable', function (req, res) {

	War.count({}, function (err, count) {
		if (err) throw err;
		if (count) {
			res.send(JSON.stringify(count));
		}
	})

})

// 向数据库添加内容
router.post('/addTable', function (req, res) {

	//建立一个初步模型
	let one = {
		id: req.body.id,
		class: req.body.class,
		tag: req.body.tag,
		url: req.body.url,
		title: req.body.title,
		war: req.body.war,
		level: req.body.level,
		num: req.body.num,
		price: req.body.price,
		oldPrice: req.body.oldPrice
	}

	// 添加数据进入数据库
	War.create(one, function (err, data) {
		if (err) {
			throw err;
		} else {
			res.send(one);
		}
	})

})

// 删除一条根据 ID 查询到的数据
router.get('/remTable', function (req, res) {

	// 删除一条找到的数据
	War.remove({
		id: req.query.id
	}, function (err, data) {
		if (err) {
			throw err;
		} else {
			res.send('删除成功');
		}
	})

})

// 根据 ID 查找这条数据
router.get('/findTable', function (req, res) {

	War.find({
		id: req.query.id
	}, function (err, data) {
		if (err) throw err;
		if (data) {
			res.send(data);
		}
	})

})

// 更新这条数据的内容
router.post('/updateTable', function (req, res) {

	War.update(req.body.oldData, req.body.tableNew, function (err, data) {
		if (err) throw err;
		if (data) {
			res.send(data);
		}
	})

})


// 轮播图
const Ban = require('../mongo/ban');

// 查询数据库里面的所有信息
router.get('/imgGet', function (req, res) {

	// 查询所有数据
	Ban.find({}, function (err, data) {

		if (err) throw err;

		// 响应请求，返回查询到的所有数据
		if (data) {
			res.send(data);
		}

	}).skip((Number(req.query.num) - 1) * Number(req.query.pageLen)).limit(Number(req.query.pageLen));

})

// 查询表内数据的长度
router.get('/imgLen', function (req, res) {

	Ban.count({}, function (err, count) {
		if (err) throw err;
		if (count) {
			res.send(JSON.stringify(count));
		}
	})

})

// 向数据库添加内容
router.post('/imgAdd', function (req, res) {

	// 获取前台发送的数据
	let addOne = JSON.parse(Object.keys(req.body)[0]);

	// 添加数据进入数据库
	Ban.create(addOne, function (err, data) {
		if (err) {
			throw err;
		} else {
			res.send(addOne);
		}
	})

})

// 删除一条根据 ID 查询到的数据
router.get('/imgRem', function (req, res) {
	Ban.remove({
		id: req.query.id
	}, function (err, data) {
		if (err) {
			throw err;
		} else {
			res.send('删除成功');
		}
	})

})

// 更新这条数据的内容
router.post('/imgUpdate', function (req, res) {

	// 获取前台发送的 新数据
	let upOne = JSON.parse(Object.keys(req.body)[0]);
	let oldUpData = null;

	// 根据 新数据 中的 id 进行查找 旧数据
	Ban.find({
		id: upOne.id
	}, function (err, data) {
		if (err) throw err;
		if (data) {
			oldUpData = data[0];
			Ban.update(oldUpData, upOne, function (err, data) {
				if (err) throw err;
				if (data) {
					res.send(data);
					console.log('更新成功')
				}
			})
		} else {
			console.log('更新失败')
		}
	})

})


// 反向代理测试
router.get('/go', function (req, res) {
	console.log('你来到了 node')

	// console.log(req);

	res.send({
		name: '你来了'
	});

})


// 用户访问记录
const Time = require('../mongo/time');

router.get('/timeAdd', function (req, res) {

	// 获取前台发送的数据
	let addOne = {
		ip: req.ip,
		height: Number(req.query.height),
		todate: req.query.todate,
		godate: req.query.godate
	};

	console.log(addOne);

	// 添加数据进入数据库
	Time.create(addOne, function (err, data) {
		if (err) {
			throw err;
		} else {
			res.send(addOne);
		}
	})

})

module.exports = router;