'use strict';

/**
 * @ngdoc function
 * @name quoteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the quoteApp
 */
angular.module('quoteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
