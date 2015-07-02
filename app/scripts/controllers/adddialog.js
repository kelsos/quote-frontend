'use strict';

/**
 * @ngdoc function
 * @name quoteFrontendApp.controller:AdddialogCtrl
 * @description
 * # AdddialogCtrl
 * Controller of the quoteFrontendApp
 */
angular.module('quoteApp')
  .controller('AddDialogCtrl', function ($scope, $mdDialog) {
    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.save = function() {
      $mdDialog.hide();
    }
  });
