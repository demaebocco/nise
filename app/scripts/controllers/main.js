'use strict';

/**
 * @ngdoc function
 * @name niseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the niseApp
 */
angular.module('niseApp')
  .controller('MainCtrl', function ($location, $route) {
    var vm = this;

    vm.deviceName = '';
    vm.enterDevice = function () {
      var url = '/device/' + vm.deviceName;
      $location.path(url);
      $route.reload();
    };
  });
