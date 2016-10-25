var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Queue = require('../models/queue-member.model');
var User = require('../models/user.model');


router.get('/', function(req, res, next) {
  Queue.find().exec(function(err, docs) {
    if (err) {
      return res.status(404).json({
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

// route protection
// router.use('/', function(req,res,next){
//   jwt.verify(req.query.token,'secret',function(err,decoded){
//     if(err){
//       return res.status(401).json({
//         title: 'Authentication failed',
//         error: err
//       });
//     }
//     next();
//   });
// });

router.post('/', function(req, res, err) {
  var queue = new Queue({
    name: req.body.name,
    reason: req.body.reason,
    bankId: req.body.bankId,
    concluded: req.body.concluded
    // user: doc
  });
  queue.save(function(err, result) {
    if (err) {
      return res.status(404).json({
        title: 'An error occurred',
        error: err
      });
    }
    res.status(201).json({
      message: 'Applied to the queue',
      obj: result
    });
  });
  // TODO: add patch functionality
  router.patch('/:id', function(req, res, next) {
    Queue.findById(req.params.id, function(err, doc) {
      if (err) {
        return res.status(404).json({
          title: 'An error occurred',
          error: err
        });
      }
      if (!doc) {
        return res.status(404).json({
          title: 'No queue member found',
          error: {
            message: 'The member of the queue could not be found.'
          }
        });
      }

      doc.content = req.body.content;
      doc.save(function(err, result) {
        if (err) {
          return res.status(404).json({
            title: 'An error occurred while saving the queue data',
            error: err
          });
        }
        res.status(200).json({
          message: 'Success',
          obj: result
        });
      });
    });
  });

  router.delete('/:id', function(req, res, next) {
    Queue.findById(req.params.id, function(err, doc) {
      if (err) {
        return res.status(404).json({
          message: 'There was an error',
          error: err
        });
      }
      if (!doc) {
        return res.status(404).json({
          title: 'No queue found',
          error: {
            message: 'Queue could not be found'
          }
        });
      }
      doc.content = req.body.content;
      doc.remove(function(err, result) {
        if (err) {
          return res.status(404).json({
            message: 'An error occurred',
            error: err
          });
        }
        res.status(200).json({
          message: 'Success',
          obj: result
        });
      });
    });
  });
});
module.exports = router;
