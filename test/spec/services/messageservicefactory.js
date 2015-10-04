'use strict';

describe('Service: messageServiceFactory', function () {

  // load the service's module
  beforeEach(module('niseApp'));

  // instantiate service
  var messageServiceFactory;
  beforeEach(inject(function (_messageServiceFactory_) {
    messageServiceFactory = _messageServiceFactory_;
  }));

  it('should do something', function () {
    expect(!!messageServiceFactory).toBe(true);
  });

});
