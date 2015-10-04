'use strict';

/**
 * @ngdoc service
 * @name niseApp.MilkCocoaFactory
 * @description
 * # MilkCocoaFactory
 * Factory in the niseApp.
 */
angular.module('niseApp')
  .factory('milkCocoaFactory', function () {
    var milkcocoa = new MilkCocoa("hotif8ab67j.mlkcca.com");

    return {
      getDatastore: function (name) {
        return milkcocoa.dataStore('nise/' + name);
      }
    };
  });
