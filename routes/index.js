var express = require('express');
var router = express.Router();
var fs = require('fs');
var mongoose = require('mongoose');


// Database Handlers
var db = mongoose.connect('mongodb://admin:admin@ds061641.mongolab.com:61641/hackathon');

var schema = mongoose.Schema({content:'string',image:'string',date:'date'});
var Event = db.model('Event',schema);


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.html', { title: 'Expressssssss' });
});
/* GET Userlist page. */
router.get('/userpost', function(req, res) {
    //var db = req.db;
    var collection = [{ "username" : "testuser2", "email" : "testuser2@testdomain.com" }, { "username" : "testuser3", "email" : "testuser3@testdomain.com" }]
    res.json(collection);
});


router.post('/newevent', function(req,res){

});

router.get('/getEvent',function(req,res){

});

module.exports = router;
