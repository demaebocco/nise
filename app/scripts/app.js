'use strict';

/**
 * @ngdoc overview
 * @name niseApp
 * @description
 * # niseApp
 *
 * Main module of the application.
 */
angular
  .module('niseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/device/:deviceName', {
        templateUrl: 'views/device.html',
        controller: 'DeviceCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
