var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
function Restaurants(){
  return knex('places')
}
function Reviews(){
  return knex('reviews')
}
/* GET users listing. */


router.get('/restaurants/#{id}/reviews/create', function(req,res,next){
    res.render('reviews/create')
})


module.exports = router;
