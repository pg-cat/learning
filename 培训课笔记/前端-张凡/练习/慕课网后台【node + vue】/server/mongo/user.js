// 导入 mongoose 的结构，用来将用户数据存入数据库
const mongoose = require('mongoose');

const user = new mongoose.Schema({

	id: Number,
	username: String,
	password: String,
	class: Array

})

module.exports = mongoose.model('users', user);