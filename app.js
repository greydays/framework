'use strict';

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost');

var appRouter = require(__dirname + '/routes/router');

var router = express.Router();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Server listening on port ' + (port || 3000));
});
