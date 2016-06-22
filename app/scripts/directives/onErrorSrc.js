'use strict';

/**
 * @ngdoc directive
 * @name movieApp.directive:onErrorSrc
 * @description
 * # onErrorSrc
 */
angular.module('movieApp')
  .directive('onErrorSrc', function() {
    return {
        link: function(scope, element, attrs) {
          element.bind('error', function() {
            if (attrs.src != attrs.onErrorSrc) {
              attrs.$set('src', attrs.onErrorSrc);
            }
          });
        }
    }
});
