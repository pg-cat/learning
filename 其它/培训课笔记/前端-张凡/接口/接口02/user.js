// 导入mongoose的结构，用来将用户数据存入数据库
var mongoose = require('mongoose');

// Schema 对应一般的model
var Schema = mongoose.Schema;

var userSchema = new Schema({

	username:{

		type:String,

		unique:true

	},
	password:{

		type:String

	},
	age:Number

})

// users 是表名称，不是库的名称
module.exports = mongoose.model('users',userSchema);