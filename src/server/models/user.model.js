var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  bank: String,
  branch: String
});


module.exports = mongoose.model('User', schema);
