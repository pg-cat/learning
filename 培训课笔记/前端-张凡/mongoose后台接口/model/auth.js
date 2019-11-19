const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({

  authid: {
    type: Number,
    // unique: true
  },
  uuid: {
    type: Number
  },
  authclass: {
    type: Array
  },
  authreader: {
    type: Number
  }

}, {
  timestamps: true
})

module.exports = mongoose.model('auth', authSchema);