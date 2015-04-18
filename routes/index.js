var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expressssssss' });
});
/* GET Userlist page. */
router.get('/userpost', function(req, res) {
    var db = req.db;
    var collection = [{ "username" : "testuser2", "email" : "testuser2@testdomain.com" }, { "username" : "testuser3", "email" : "testuser3@testdomain.com" }]
    res.json(collection);
});
module.exports = router;
