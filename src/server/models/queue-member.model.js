var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Branch = require('./branch.model');
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
  branch: {
    type: Schema.Types.ObjectId,
    ref: 'Branch'
  },
  branchId: String,
  concluded: String,
  queueId: String
});

//Picks the queueMember from the branch as the queueMember is removed from the database
schema.post('remove', function(queueMember){
  Branch.findById(queueMember.branch, function(err, branch){
    branch.queueMembers.pull(queueMember);
    branch.save();
  });
});

module.exports = mongoose.model('QueueMember', schema);
