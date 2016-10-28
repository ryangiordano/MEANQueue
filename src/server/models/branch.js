var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  name:{
    type: String,
    required: true
  },
  employees: {
    type: Array,
    required: false
  },
  queueMembers: {
    type: Array,
    required: false
  },
  address: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('Branch', schema);
