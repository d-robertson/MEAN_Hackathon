var express = require('express');
var crime = require('../models/crime-model');
var router = express.Router();

router.route('/')
  .get(function(req, res) {

    var search = {}

    if (req.query['age'] != null ) {
      search['age'] = parseInt(req.query['age']);
    }
    if (req.query['state'] != null ) {
      search['State'] = req.query['state'].toUpperCase();
    }
    if (req.query['type'] != null ) {
      search['type'] = new RegExp(req.query['type'], 'i')
    }
    if (req.query['date'] != null ) {
      search['date'] = new RegExp(req.query['date'], 'i');
    }

    crime.find( search,function(err, crimes) {
      if (err) {return res.status(500).send(err);}
      return res.send(crimes)
    }).limit(100);
  });

module.exports = router;
