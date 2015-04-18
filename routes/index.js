+------var express = require('express');
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
    //var collection = [{ "username" : "testuser2", "email" : "testuser2@testdomain.com" }, { "username" : "testuser3", "email" : "testuser3@testdomain.com" }]
    Event.find(function(err,events){
      if(!err){
        res.json(events);
      } else {
        console.log(err);
      }
    });
});



router.get('/getEvent',function(req,res){

    Event.find({},function(err,docs){
        if(err){
            console.log(err);
        }
        else {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(docs);

        }
    });
    res.end();

});

router.post('/newevent', function(req,res){
  console.log('GO to /newevent');

  var postData = req.body;
  var datetime = new Date();
  console.log('This is post :' + postData);
  var newEvent = new Event({content : "18:51",image:'img.jpeg',date:datetime  });

  newEvent.save(function(err,data){
    if(!err){
      console.log(data);
    } else {
      console.log(err);
    }
  });

});

module.exports = router;
