// 导入 mongoose 的结构，用来将用户数据存入数据库
const mongoose = require('mongoose');

const time = new mongoose.Schema({

	ip: String,
	height: Number,
	todate: String,
	godate: String
})

module.exports = mongoose.model('times', time);