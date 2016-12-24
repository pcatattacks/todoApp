module.exports = function(app){

var data = [{item:'get milk'},{item: 'walk dog'}, {item: 'code Node'}]; //dummy data

app.get('/todo', function(req, res){
    res.render('todo.ejs', {todos: data});
});

app.post('/todo', function(req, res){

});

app.delete('/todo', function(req, res){

});

};