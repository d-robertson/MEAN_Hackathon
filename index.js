var express = require('express');
var path = require('path');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/policeDB');

app.use(express.static(__dirname + '/public/'));

app.use(require('morgan')('dev'));

app.use('/api/crimes', require('./controllers/crimes'));

app.get('/', function(req, res) {
  res.send('Hello Backend!');
});

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
