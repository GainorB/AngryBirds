//REQUIRE LODASH TO USE IT
var _ = require('lodash');

var express = require('express');
var router = express.Router();

//SAVE ANGRY_BIRDS.JSON DATA TO A VARIABLE
var angrybirds = require('../data/angry_birds');

//RENDERS /ANGRY-BIRDS/
//SHOWS THE PAGE WITH ALL BIRDS
router.get('/', function(req, res, next) {
  //STORE QUERIES
  var group = req.query.group;
  var species = req.query.species;
  var feels = req.query.feels;
  var ab = angrybirds; //TEMPORARILY STORES FILTERED OBJECT
  
  //FILTERING
  //IF EACH FILTER EXISTS FILTER
  //FILTER AND CONVERT TO LOWERCASE TO MAKE IT CASE SENSITIVE
  if(group){
    ab = _.filter(ab, function(obj) {return obj["group"].toLowerCase() === group.toLowerCase()});    
  } 
  if(species){    
    ab = _.filter(ab, function(obj) {return obj["species"].toLowerCase() === species.toLowerCase()});
  }
  if(feels){
    ab = _.filter(ab, function(obj) {return obj["feels"].toLowerCase() === feels.toLowerCase()});
  } 
  if(!group && !species && !feels){
    ab = angrybirds; //IF NO QUERY, RESET AB TO NON FILTERED OBJECT
  }
  
  res.render('angry-birds', {
    angrybirds: ab
  });
});

//RENDERS /ANGRY-BIRDS/ID/
//SHOWS THE PAGE WITH ONE BIRD
router.get('/:id', function(req, res, next) {
  var id = req.params.id;

  res.render('bird', {
    angrybirds: angrybirds[id-1]
  });
});

module.exports = router;