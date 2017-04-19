// Factory and Controller
var app = angular.module("app", ["ngRoute"]);

app.factory("getMovie", ["$http",function($http){
	var obj = {};
	var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
	obj.getMovieInfo = function(title){ 
		return $http({
		    url: url,
		    method: "GET",
		    params:{ 
		        query: title,
		        api_key: "68094e1974e7984c256beb1653319915:3:33678189",
		        callback: "JSON_CALLBACK"
		  },
		    headers: {
		        "Content-Type" : "application/json"
		    }
			}).then(function successCallback(response) {
			        return response.data.results; 
			 }, function errorCallback(response) {
			        console.log("Nothing to see here...");
			 });
			};
	    return obj;


}]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider
        .when("/", {
            templateUrl: "views/intro-header.html"
        })
        .when("/movies", {
            templateUrl: "views/movies.html",
            controller: "moviesCtrl"
        }).
        otherwise({
            redirect: '/'
        });

        $locationProvider.html5Mode(true);
    }]);

app.controller("moviesCtrl", ["$scope", "getMovie", function($scope, getMovie){
    $scope.findMovie = function() {
        getMovie.getMovieInfo($scope.title).then(function(response){
            $scope.results = response; 
        });
    };    
}]);

/* Create a 'random' search method 
/* The Movie Database json call with api key:
https://api.themoviedb.org/3/search/movie?api_key=a8a5a8ed1d0f34270b4ea8e71d2580db&query=Jack+Reacher
 - base url for poster: http://image.tmdb.org/t/p/w185
  - poster_path: /IfB9hy4JH1eH6HEfIgIGORXi5h.jpg"
*/ 

	

	