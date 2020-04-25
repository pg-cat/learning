// 导入 mongoose 的结构，用来将用户数据存入数据库
const mongoose = require('mongoose');

const war = new mongoose.Schema({

	id: {
		type: Number,
		// unique: true
	},
	classID: Number,
	tag: String,
	url: String,
	title: String,
	war: String,
	level: String,
	num: Number,
	price: Number,
	oldPrice: Number

})

module.exports = mongoose.model('wars', war);