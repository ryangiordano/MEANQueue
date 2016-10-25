var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');

var User = require('./user.model');

//registering a new user
router.post('/', function(req, res, next) {
  //establish the user object
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    email: req.body.email,
    bankId: req.body.bankId,
    branchId: req.body.branchId
  });
  //because User is a mongoose schema, it has access to mongoose methods for interacting with the mongoDB it's connected with
  user.save(function(err, result){
    if(err){
      return res.status(404).json({
        title: 'An error occurred while registering this user',
        error: err
      });
    }
    res.status(200).json({
      message: 'Successfully registered',
      obj: result
    });
  });
});
//signing in
router.post('/signin', function(req,res,next) {
  User.findOne({email: req.body.email}, function(err, doc){
    if(err){
      return res.status(404).json({
        title: 'An error occured while signing you in.',
        error: err
      });
    }
    if(!doc){
      return res.status(404).json({
        title: 'No user found',
        error: {message: 'User could not be found'}
      });
    }
    //if the hashed password is not identical with the password residing on the database
    if(!passwordHash.verify(req.body.password, doc.password)){
      return res.status(404).json({
        title: 'Password is incorrect',
      })
    }
    //generate a token
    var token = jwt.sign({user:doc}, 'secret', {expiresIn: 7200});
    res.status(200).json({
      message: 'Success',
      token: token,
      userId: doc._id
    });
  })
});

module.exports = router;
