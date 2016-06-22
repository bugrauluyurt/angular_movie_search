'use strict';

/**
 * @ngdoc function
 * @name movieApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the movieApp
 */
angular.module('movieApp')
  .controller('HomeCtrl', ['$scope', 'movieService', function($scope, movieService) {
    
	    $scope.movie = movieService.movie;
	    
	    $scope.$watch('movie', function() {
	       movieService.movie = $scope.movie; 
	    });
    
}]);
