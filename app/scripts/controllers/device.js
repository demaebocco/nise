'use strict';

/**
 * @ngdoc function
 * @name niseApp.controller:DeviceCtrl
 * @description
 * # DeviceCtrl
 * Controller of the niseApp
 */
angular.module('niseApp')
  .controller('DeviceCtrl', function ($routeParams, milkCocoaFactory, messageServiceFactory) {
    var vm = this;

    var name = $routeParams.deviceName;
    console.log(name);

    var messageService = messageServiceFactory.get(name);

    vm.message = '';
    vm.messages = messageService.get();
    vm.send = function () {
      messageService.send(vm.message);
      vm.message = '';
    };
  });
