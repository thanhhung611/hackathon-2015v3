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
<<<<<<< HEAD
  var content;
      var input = JSON.parse(req.body);
    console.log(input);
      var time = new Date();
      var newEvent = new Event({content: input.content.toString(), image: input.image,date:time });
      newEvent.save(function(err,data){
          if(err) console.log(err);
          else
          {
              console.log('Saved :' + data);
              res.json(data);
          }
      });
=======
  //var content;
    express.bodyParser();

        var time = new Date();
        var newEvent = new Event({content: req.body.content, image: req.body.image,date:time });

        newEvent.save(function(err,data){
            if(err) console.log(err);
            else
            {
                console.log('Saved :' + data);
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.json(data);
            }
        });


>>>>>>> 59f82bc2226d4f106b268c6da3b2768e1396a0e0

    res.end();

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


module.exports = router;
