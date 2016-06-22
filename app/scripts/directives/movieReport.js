'use strict';

/**
 * @ngdoc directive
 * @name movieApp.directive:movieReport
 * @description
 * # movieReport
 */
angular.module('movieApp')
  .directive("movieReport", function() {
   return {
       restrict: 'E',
       templateUrl: 'views/movieReport.html',
       replace: true,
       scope: {
           movieItem: "="
       }
   }
});
