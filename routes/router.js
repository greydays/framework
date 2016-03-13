'use strict';

var mongoose = require('mongoose');
var Item = require('../models/Item');

module.exports = function(router) {

  // get all
  router.get('./item', function(req, res) {
    Item.find({}, function(err,data) {
      if (err) {
        res.status(500).json({msg: 'Internal Server Error'});
      }
      res.json(data);
    });
  });

  router.get('/:item_id', function(req, res) {
    var itemId = req.params.item;
    Item.findOne({_id: itemId}, function(err, item) {
      if (err) {
        console.log(err);
        res.status(500).json({msg: 'Internal server error'});
      }
      if (item) {
        res.json(item);
      } else {
        res.status(404).json({msg: 'Unable to locate ' + itemId});
      }
    });
  });

  router.post('./item', function(req, res) {
    var item = new Item(req.body);
    item.save(function(err, data) {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      }
      res.json(data);
    });
  });


  router.put('./item', function(req, res) {

  });

  router.delete('./item', function(req, res) {
    var itemId = req.params.item;
    Item.findOne({_id: itemId}, function(err, doc) {
      if (err){
        res.status(500).json(err);
      }
      doc.remove();
      res.json({msg: 'document was removed'});
    });
  });
};

