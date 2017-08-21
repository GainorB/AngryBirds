var express = require('express');
var router = express.Router();

//SAVE ANGRY_BIRDS.JSON DATA TO A VARIABLE
var angrybirds = require('../data/angry_birds');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Angry Birds' });
});

module.exports = router;
