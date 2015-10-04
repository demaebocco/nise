'use strict';

describe('Service: senderId', function () {

  // load the service's module
  beforeEach(module('niseApp'));

  // instantiate service
  var senderId;
  beforeEach(inject(function (_senderId_) {
    senderId = _senderId_;
  }));

  it('should do something', function () {
    expect(!!senderId).toBe(true);
  });

});
