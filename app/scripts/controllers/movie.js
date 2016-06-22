'use strict';

/**
 * @ngdoc function
 * @name movieApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the movieApp
 */
angular.module('movieApp')
  .controller('MovieCtrl', ['$scope', '$resource', '$routeParams','$http', 'movieService', function($scope, $resource, $routeParams, $http, movieService) {
    
	    $scope.movie = movieService.movie;
	    $scope.page = $routeParams.page || 1;
	    // $scope.movieAPI = $resource("http://www.omdbapi.com/", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
	    // $scope.movieResults = $scope.movieAPI.get({ s: $scope.movie, y:'', page: $scope.page, plot: 'full', r: 'json' });

	    $scope.pageArr = [];
	    $http.jsonp("http://www.omdbapi.com/?s=" + $scope.movie + "&page=" + $scope.page + "&plot=full&r=json&callback=JSON_CALLBACK")
	        .success(function(response){
	            // console.log(response);
	            $scope.totalResults = response.totalResults;
	            $scope.movieResults = response.Search;
	            $scope.searchLength = response.Search.length;
	            var paginationLength = response.totalResults / 10;

	            for(var i=1; i<paginationLength + 1; i++) {
	                $scope.pageArr.push(i);
	            };
	            // console.log($scope.pageArr);
	        });
    
}]);
