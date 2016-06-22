'use strict';

/**
 * @ngdoc overview
 * @name movieApp
 * @description
 * # movieApp
 *
 * Main module of the application.
 */
angular
  .module('movieApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
    })
    
    .when('/movie', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl'
    })
    
    .when('/movie/:page', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl'
    });
});
