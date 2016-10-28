var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
  name: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  bankId: String,
  branchId: String,
  concluded: String,
  queueId: String
});



module.exports = mongoose.model('QueueMember', schema);
