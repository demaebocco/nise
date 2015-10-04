'use strict';

/**
 * @ngdoc service
 * @name niseApp.messageServiceFactory
 * @description
 * # messageServiceFactory
 * Factory in the niseApp.
 */
angular.module('niseApp')
  .factory('messageServiceFactory', function ($rootScope, milkCocoaFactory, senderId) {
    var MessageService = function (name) {
      var dataStore = this.dataStore_ = milkCocoaFactory.getDatastore(name);
      var messages = this.messages_ = [];

      dataStore.on('push', function (data) {
        var message = {
          text: data.value.text,
          sender: data.value.sender,
          mine: data.value.sender === senderId
        };

        $rootScope.$apply(function () {
          messages.unshift(message);
        });
      });
    };

    MessageService.prototype.get = function () {
      return this.messages_;
    };

    MessageService.prototype.send = function (text) {
      var message = {text: text, sender: senderId};
      this.dataStore_.push(message);
    };

    return {
      get: function (name) {
        return new MessageService(name);
      }
    };
  });
