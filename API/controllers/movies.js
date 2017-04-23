/**
 * Created by Adrian Calancea on 4/23/2017.
 */
var Movies=require('../models/movies');

exports.all=function(req,res){
 res.send(Movies.all());
};
exports.getById=function (req,res) {
    var movie=Movies.getById(Number(req.params.id));
    if(!movie)
        res.send("No movie with this ID");
    else res.send(movie);

};
exports.create=function (req,res) {
    var movie={
        id: Date.now(),
        title: req.body.title,
        description: req.body.description,
        rating: req.body.rating,
        released: req.body.released
    };
    res.send(Movies.create(movie));
};

exports.update=function(req,res){
    console.log(req.body);
    var movie={
        title: req.body.title,
        description: req.body.description,
        rating: req.body.rating,
        released: req.body.released
    };
    Movies.update(Number(req.params.id),movie);
    res.sendStatus(200);
};

exports.delete=function (req,res) {
    Movies.delete(Number(req.params.id));
    res.sendStatus(200);
};