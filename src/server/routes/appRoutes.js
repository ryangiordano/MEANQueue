var express = require('express');
var router = express.Router();
var User = require('../models/user.model');

router.get('/',function(res,req,next){
  res.render('index');
});

module.exports = router;
