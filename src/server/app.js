var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');

//import routes
var appRoutes = require('./appRoutes');
var queueRoutes = require('./queue');
var userRoutes = require('./users');

var app = express();
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname + '/../../dist'));
app.use('/', express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PATCH,DELETE');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger('dev'));


// mongoose.connect('thedaruma:test123@ds021346.mlab.com:21346/thedaruma');

mongoose.connect('localhost:27017/mean-angular');

var db = mongoose.connection;
mongoose.Promise = global.Promise;

//routes
app.use('/queue', queueRoutes);
app.use('/', appRoutes);
// app.use('/message',messageRoutes);


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');


// all other routes are handled by Angular
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname,'/../../dist/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Angular 2 Full Stack listening on port '+app.get('port'));
});
});
