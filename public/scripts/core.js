/**
 * Created by Adrian Calancea on 4/23/2017.
 */

var myApp = angular.module('myApp', []);

function mainController($scope, $http) {
    $scope.movieData = {};
    $scope.movieDataUpdate = {};

    // get all Movies
    $http.get('/api/movies')
        .success(function (data) {
            $scope.movies = data;
            console.log(data);
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });


    $scope.createMovie = function () {
        $http.post('/api/movies', $scope.movieData)
            .success(function (data) {
                $scope.movieData = {};
                $http.get('/api/movies')
                    .success(function (data) {
                        $scope.movies = data;
                        console.log(data);
                    })
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };


    $scope.deleteMovie = function (id) {
        $http.delete('/api/movies/' + id)
            .success(function (data) {
                $http.get('/api/movies')
                    .success(function (data) {
                        $scope.movies = data;
                        console.log(data);
                    })
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    $scope.createUpdateForm = function (id) {
        $http.get('/api/movies/' + id)
            .success(function (data) {
                $scope.movieDataUpdate = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };


    $scope.updateMovie = function (id) {
        $http.put('/api/movies/' + id, $scope.movieDataUpdate)
            .success(function (data) {

                $http.get('/api/movies')
                    .success(function (data) {
                        $scope.movies = data;
                        console.log(data);
                    })
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

}