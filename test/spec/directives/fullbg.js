'use strict';

describe('Directive: fullBg', function () {

  // load the directive's module
  beforeEach(module('cncv2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<full-bg></full-bg>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fullBg directive');
  }));
});
