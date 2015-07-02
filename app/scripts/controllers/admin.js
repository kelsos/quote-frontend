'use strict';

/**
 * @ngdoc function
 * @name quoteApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the quoteApp
 */
angular.module('quoteApp')
  .controller('AdminCtrl', function ($scope, Restangular) {
    var users = Restangular.all('admin/users');
    users.getList().then(function (results) {
      $scope.users = results;
      console.log(results);
    });

  });
