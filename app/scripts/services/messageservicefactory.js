'use strict';

/**
 * @ngdoc service
 * @name niseApp.messageServiceFactory
 * @description
 * # messageServiceFactory
 * Factory in the niseApp.
 */
angular.module('niseApp')
  .factory('messageServiceFactory', function ($rootScope, milkCocoaFactory) {
    var MessageService = function (name) {
      var dataStore = this.dataStore_ = milkCocoaFactory.getDatastore(name);
      var messages = this.messages_ = [];

      dataStore.on('push', function (data) {
        $rootScope.$apply(function () {
          messages.push(data.value);
        });
      });
    };

    MessageService.prototype.get = function () {
      return this.messages_;
    };

    MessageService.prototype.send = function (text) {
      var message = {text: text};
      this.dataStore_.push(message);
    };

    return {
      get: function (name) {
        return new MessageService(name);
      }
    };
  });
