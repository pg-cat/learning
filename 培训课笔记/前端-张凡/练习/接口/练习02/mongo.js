// 引入 mongoose
const mongoose = require('mongoose');

// 引入 mongoose 的模块 Schema
// const Schema = mongoose.Schema;

let userSchema = new mongoose.Schema({
  userName: {
    // 数据类型
    type: String,
    // 是否唯一
    unique: true
  },
  passWord: String,
  age: Number,
  firstTime:{
    type:Date,
    default:Date.now()
  },
  newTime:{
    type:Date,
    default:Date.now()
  }
})

// 每次被调用时更新时间，但 firstTime 只更新第一次
// userSchema.pre('save',next=>{
//   if(this.isNew){
//     this.firstTime = this.newTime = Date.now();
//   }
//   else{
//     this.newTime = Date.now();
//   }
//   next()
// })

module.exports = mongoose.model('users',userSchema);
