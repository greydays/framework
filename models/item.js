'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  title: String,
  date: Date,
  description: String,
  cost: Number,
  true: Boolean
});

module.exports = mongoose.model('Item', ItemSchema);

