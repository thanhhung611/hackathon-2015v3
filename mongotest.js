var mongo = require('mongoose');

mongo.connect('mongodb://admin:admin@ds061641.mongolab.com:61641/hackathon');

var db = mongo.connection;

db.on('error', console.error.bind(console,'connection error:'));
db.once('open',function(callback){
    console.log('done!!');
});
