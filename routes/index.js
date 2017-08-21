const express = require('express');
const router = express.Router();

//SAVE ANGRY_BIRDS.JSON DATA TO A VARIABLE
const angrybirds = require('../data/angry_birds');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Angry Birds' });
});

module.exports = router;