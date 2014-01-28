'use strict';

describe('Service: Articles', function () {

  // load the service's module
  beforeEach(module('cncv2App'));

  // instantiate service
  var Articles;
  beforeEach(inject(function (_Articles_) {
    Articles = _Articles_;
  }));

  it('should do something', function () {
    expect(!!Articles).toBe(true);
  });

});
