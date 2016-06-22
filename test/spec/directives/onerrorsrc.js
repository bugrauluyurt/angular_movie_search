'use strict';

describe('Directive: onErrorSrc', function () {

  // load the directive's module
  beforeEach(module('movieApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<on-error-src></on-error-src>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the onErrorSrc directive');
  }));
});
