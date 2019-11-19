var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var pptSchema = new Schema({

  id : {
    type:Number,
    unique:true
  },
  imgTitle : {
    type:String
  },
  ewai:{
    type:String
  },
  imgUrl:{
    type:String
  }

},{
  timestamps:true
})

module.exports = mongoose.model('ppt',pptSchema);
