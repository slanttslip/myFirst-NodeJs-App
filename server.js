/**
 * Created by Adrian Calancea on 4/22/2017.
 */
var express=require('express');
var bodyParser=require('body-parser');
var moviesController=require('./API/controllers/movies');

var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended :true }));

app.get('/api/movies',moviesController.all);

app.get('/api/movies/:id',moviesController.getById);


app.post('/api/movies',moviesController.create);

app.put('/api/movies/:id',moviesController.update);

app.delete('/api/movies/:id',moviesController.delete);


// application that consume my API------------------------------------
app.use(express.static(__dirname + '/public'));

app.listen(3012,function(){
    console.log('API app is started');
});
