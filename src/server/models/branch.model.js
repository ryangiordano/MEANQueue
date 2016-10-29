var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  name:{
    type: String,
    required: true
  },
  employees: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  queueMembers: [{
    type: Schema.Types.ObjectId,
    ref: 'QueueMember'
  }],
  address: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Branch', schema);
