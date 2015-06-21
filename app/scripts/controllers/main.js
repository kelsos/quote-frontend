'use strict';

/**
 * @ngdoc function
 * @name quoteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quoteApp
 */
angular.module('quoteApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
