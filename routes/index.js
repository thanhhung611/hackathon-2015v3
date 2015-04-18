var express = require('express');
var router = express.Router();
var fs = require('fs');
//var app = require('app');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expressssssss' });
});
/* GET Userlist page. */
router.get('/userpost', function(req, res) {
    //var db = req.db;
    var collection = [{ "username" : "testuser2", "email" : "testuser2@testdomain.com" }, { "username" : "testuser3", "email" : "testuser3@testdomain.com" }]
    res.json(collection);
});

router.post('/newevent', function(req,res){
  var content;
  req.on('data',function(data){
      var input = JSON.parse(data);
      var time = new Date();
      var newEvent = new Event({content: "hihi", image: 'path',date:time });

      newEvent.save(function(err,data){
          if(err) console.log(err);
          else console.log('Saved :' + data);
      });
  });
});


module.exports = router;
