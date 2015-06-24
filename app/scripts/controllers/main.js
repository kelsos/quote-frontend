'use strict';

/**
 * @ngdoc function
 * @name quoteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quoteApp
 */
angular.module('quoteApp')
  .controller('MainCtrl', function ($scope, $mdDialog, Restangular, $location, jwtHelper) {
    var self = this,
      alert;

    self.storeToken = function (token) {
      window.localStorage['jwtToken'] = token;
    };

    $scope.title = 'Authentication';

    var token = window.localStorage['jwtToken'];
    if (token != null && !jwtHelper.isTokenExpired(token)) {
      $location.path("/quote")
    }

    $scope.login = function () {
      var credentials = {
        username: this.username,
        password: this.password
      };

      var login = Restangular.all("login");
      login.post(credentials).then(function ($response) {
        self.storeToken($response.token);
        $location.path("/quote")
      }, function ($result) {
        console.log($result);
        alert = $mdDialog.alert({
          title: 'Error',
          content: $result.data.description,
          ok: 'Close'
        });

        $mdDialog.show(alert)
          .finally(function () {
            alert = undefined;
          });
      });
    };
    $scope.register = function () {
      $location.path('/register');
    };

    $scope.forgotPassword = function () {
      $location.path('/reset');
    }
  });
