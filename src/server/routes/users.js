var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var passwordHash = require('password-hash');

var User = require('../models/user.model');

router.post('/', function(req,res,next){
  var user = new User({
    email: req.body.email,
    password: passwordHash.generate(req.body.password),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    branchId: req.body.branchId,
    bankId: req.body.bankId
  });
  user.save(function(err, result){
    if(err){
      return res.status(404).json({
        title: 'An error occurred within the Users page',
        error: err
      });
    }
    res.status(200).json({
      message: "Successfully created user",
      obj: result
    });
  });
});
