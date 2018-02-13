//port for server/ heroku
var port = process.env.PORT || 8080;
// requireing express js
var express = require('express');
//requiring body parser
var bodyParser = require('body-parser');
var path = require('path');
var handlebars = require('handlebars');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));


//main oage
app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname + '/public/index.html'));
	
});
// javascript file
app.get('/script', function (req, res) {
 res.sendFile(path.join(__dirname + '/public/assets/js/script.js'));
// handlebars library	
});
app.get('/hbLib', function (req, res) {
 res.sendFile(path.join(__dirname + '/public/assets/js/handlebars-v4.0.11.js'));
	
});
//handlebars tempalte
app.get('/hb', function (req, res) {
 res.sendFile(path.join(__dirname + '/views/layouts/main.hbs'));
	
});
//jquery min library
app.get('/jq', function (req, res) {
 res.sendFile(path.join(__dirname + '/public/assets/js/jquery-3.3.1.min.js'));
	
});
//json object
app.get('/json', function (req, res) {
 res.sendFile(path.join(__dirname + '/db/dt.json'));
	
});
//server listening 
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});