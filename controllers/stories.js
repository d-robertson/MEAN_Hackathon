var express = require('express');
var story = require('../models/story-model');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    console.log("get route working");
  });
