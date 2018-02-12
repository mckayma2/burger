var port = process.env.PORT || 8080;
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var handlebars = require('handlebars');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));



app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname + '/public/index.html'));
	
});

app.get('/script', function (req, res) {
 res.sendFile(path.join(__dirname + '/public/assets/js/script.js'));
	
});
app.get('/hb', function (req, res) {
 res.sendFile(path.join(__dirname + '/public/assets/js/handlebars-v4.0.11.js'));
	
});

app.get('/jq', function (req, res) {
 res.sendFile(path.join(__dirname + '/public/assets/js/jquery-3.3.1.min.js'));
	
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});