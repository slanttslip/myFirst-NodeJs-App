/**
 * Created by Adrian Calancea on 4/23/2017.
 */
var movies= [{
    id:1,
    title: 'Titanic',
    description: 'Best Movie',
    rating: 10,
    released: "03/25/2015"
},
    { id:2,
        title: 'HarryPotter',
        description: 'Best Movie 2',
        rating: 10,
        released: "03/25/2016"
    }
];

exports.all=function () {
return movies;
};

exports.getById=function(id){
    var movie=movies.find(function (movie) {
        return movie.id===id;
    });
    return movie;
};

exports.create=function(movie){
    movies.push(movie);
    return movie;
};

exports.update=function(id, movieObject){
  var movie=movies.find(function (movie) {
      return movie.id===id;
  });
    movie.title=movieObject.title;
    movie.description=movieObject.description;
    movie.rating=movieObject.rating;
    movie.released=movieObject.released;

};

exports.delete=function(id){
 movies=movies.filter(function (movie) {
      return movie.id!==id;
  })
};