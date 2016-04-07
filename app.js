var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
var morgan = require('morgan');
var csurf = require('csurf');

// Twilio files
var config = require('./config');
var twilioNotifications = require('./middleware/twilioNotifications');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/twilio', function(req, res) {
  res.render('twiliotest');
  // send an SMS message
  twilioNotifications.sayHi();
});

var server = app.listen(7000, function() {
	console.log('Express server listening on port ' + server.address().port);
});
