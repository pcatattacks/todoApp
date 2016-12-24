var express = require('express');
var bodyparser = require('body-parser');
var ejs = require('ejs');

var todoController = require('./controllers/todoController')

var app = express(); //initialising app

app.set('view engine','ejs'); //setting view engine to ejs

app.use(express.static('./public')); //middleware for using static files

//fire controllers
todoController(app);

app.listen(3000); // receiving and responding to requests at port 3000
console.log('Now listening to port 3000.');