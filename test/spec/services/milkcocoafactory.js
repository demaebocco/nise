'use strict';

describe('Service: milkCocoaFactory', function () {

  // load the service's module
  beforeEach(module('niseApp'));

  // instantiate service
  var milkCocoaFactory;
  beforeEach(inject(function (_milkCocoaFactory_) {
    milkCocoaFactory = _milkCocoaFactory_;
  }));

  it('should do something', function () {
    expect(!!milkCocoaFactory).toBe(true);
  });

});
