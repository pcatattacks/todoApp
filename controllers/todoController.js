var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://test:test@ds145208.mlab.com:45208/pcatsdb');

//create schema
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);
//testing
// var itemOne = Todo({item: 'buy flowers'}).save(function(err){
//     if (err) throw err;
//     console.log('item saved');
// });

var urlencodedParser =  bodyParser.urlencoded({extended:false});

module.exports = function(app){

//var data = [{item:'get milk'},{item: 'walk dog'}, {item: 'code Node'}]; //dummy data

app.get('/todo', function(req, res){
    //get data from mongoDB and pass to view
    Todo.find({}, function(err, data){
        if (err) throw err;
        res.render('todo', {todos: data});    
    });
});

app.post('/todo', urlencodedParser, function(req, res){
    //get data from view and add it to mongoDB
    Todo(req.body).save(function(err, data){
        if (err) throw err;
        res.json(data);
    });
});

app.delete('/todo/:item', function(req, res){
    //delete the requested item from MongoDB
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
        if (err) throw err;
        res.json(data);
    }); 
});

};