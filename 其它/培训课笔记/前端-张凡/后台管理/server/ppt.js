// 导入mongoose的结构，用来将用户数据存入数据库
var mongoose = require('mongoose');

// Schema 对应一般的model
var Schema = mongoose.Schema;

var imgmsg = new Schema({

	id:Number,
	imgTitle:{
		type:String
	},
	imgurl:{
		type:String
	},
	ahref:{
		type:String
	}

})

// users 是表名称，不是库的名称
module.exports = mongoose.model('ppt',imgmsg);