var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

var User = require('../models/user.model');
var Branch = require('../models/branch.model');

router.post('/', function(req,res,next){
  Branch.findById(req.body.branchId, function(err, branch){
    if(err){
      return res.status(500).json({
        title: 'Must create a branch and assign the user to a branch.',
        error: err
      });
    }
    var user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password,10),
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
      branch.employees.push(result);
      branch.save(function(err, result){
        if(err){
          return res.status(404).json({
            title: 'An error occurred when saving the user to a branch\'s employee array',
            error: err
          });
        }
      });
      res.status(200).json({
        message: "Successfully created user",
        obj: result
      });
    });
  });

});

router.post('/signin', function(req,res,next){
  User.findOne({email: req.body.email}, function(err, user){
      if(err){
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      if(!user){
        return res.status(401).json({
          title: 'User not found',
          error: {message: 'Invalid login credentials'}
        });
      }
      if(!bcrypt.compareSync(req.body.password, user.password)){
        return res.status(401).json({
          title: 'Incorrect Password',
          error: {message: 'The password entered does not match the one on record'}
        });
      }
      //2 hours
      var token = jwt.sign({user:user}, 'secret', {expiresIn:7200});
      res.status(200).json({
        message:'Successfully logged in',
        token:token,
        userId: user._id,
        user: user
      });
  });
});

router.post('/findone',function(req,res,next){
  User.findById(req.body.userId, function(err, user){
    if(err){
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    return res.status(200).json({
      message: 'Here is your user',
      user: user
    });
  });
});

module.exports = router;
