// 导入 mongoose 的结构，用来将用户数据存入数据库
const mongoose = require('mongoose');

const ban = new mongoose.Schema({

	id: Number,
	imgurl: String,
	title: String,
	ahref: String

})

module.exports = mongoose.model('bans', ban);