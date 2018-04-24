// These are the dependencies for the app
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// setting up the express app
var app = express();
var PORT = 8080;

// handling how the data is parsed using express

// listening for the port to run the code
app.listen(PORT, function(){
    console.log('app is listening' + PORT);
});

// Arrays to hold data
var reservations = [];
var waitList = [];

// routes
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'home.html'))
});

app.get('api/tables', function(req, res){
    return res.json(reservations)
});

app.get('api/waitlist', function(req, res){
    return res.json(reservations)
});
