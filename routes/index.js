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
    //var collection = [{ "username" : "testuser2", "email" : "testuser2@testdomain.com" }, { "username" : "testuser3", "email" : "testuser3@testdomain.com" }]
    Event.find(function(err,events){
      if(!err){
        res.json(events);
      } else {
        console.log(err);
      }
    });
});

router.post('/newevent', function(req,res){
<<<<<<< HEAD
  var postData = req.body;
  var datetime = new Date();
  console.log(postData);
  var newEvent = new Event({content : postData.content,image:'',date:datetime  });

  newEvent.save(function(err,data){
    if(!err){
      console.log(data);
    } else {
      console.log(err);
    }
  });

  res.end();
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



    res.end();

>>>>>>> 3a2bd9b73f38c8fb7c994c9d0511b6d43bfc52c6
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
