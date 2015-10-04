'use strict';

/**
 * @ngdoc service
 * @name niseApp.senderId
 * @description
 * # senderId
 * Factory in the niseApp.
 */
angular.module('niseApp')
  .factory('senderId', function () {
    return sha1(Math.random().toString()).substr(0, 8);
  });
