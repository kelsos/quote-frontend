'use strict';

/**
 * @ngdoc function
 * @name quoteApp.controller:ToolbarCtrl
 * @description
 * # ToolbarCtrl
 * Controller of the quoteApp
 */
angular.module('quoteApp')
  .controller('ToolbarCtrl', function ($scope, $location) {
    $scope.navigateLogin = function() {
      $location.path('/login');
    };

    $scope.navigateRegister = function () {
      $location.path('/register');
    };
  });
