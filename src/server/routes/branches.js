var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Queue = require('../models/queue-member.model');
var User = require('../models/user.model');
var Branch = require('../models/branch.model');

router.get('/', function(req, res, next){
  Branch.find().exec(function(err, docs){
    if(err){
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    res.status(200).json({
      message: 'Success',
      obj: docs
    });
  });
});

router.post('/', function(req,res,next){
  var branch = new Branch({
    name: req.body.name,
    address: '',
    // queueMembers: [],
    // employees: []
  });
  branch.save(function(err, result){
    if(err){
      return res.status(404).json({
        title: 'An error occured',
        error: err
      });
    }
    res.status(201).json({
      message: 'Added branch successfully',
      obj: result
    });
  });
});

module.exports= router;
