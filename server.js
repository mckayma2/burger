//port for server/ heroku

var port = process.env.PORT || 8080;
var Sequelize = require('sequelize');
var mysequalize = require('./models/burger.js');
var connection = new Sequelize("mydb", "root", "Player1#",  {host: 'localhost', dialect: 'mysql' });
var options = { dotfiles: 'ignore', etag: false, extensions: ['htm', 'html'], index: false};
// requireing express js
var express = require('express');
//requiring body parser
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var exphbs = require('express-handlebars'); 
//Express-Handlebars engine
app.engine('handlebars', exphbs({defaultLayout: 'main'})); 
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public') , options  ));
app.get('/', function(req, res)
{
res.render('index');   // this is the important part
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

// ******************************************************************SUQELIZE CODE***************************************************************

mysequalize.createTable('Article2', 'mario', 'test1', Sequelize.STRING, 'test2', Sequelize.STRING, 'test3', Sequelize.STRING, 'test4', Sequelize.STRING, connection);



