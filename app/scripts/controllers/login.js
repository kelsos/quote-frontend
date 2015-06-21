'use strict';

/**
 * @ngdoc function
 * @name quoteApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the quoteApp
 */
angular.module('quoteApp')
  .controller('LoginCtrl', function ($scope, Restangular) {
    var self = this;

    self.storeToken = function(token) {
      window.localStorage['jwtToken'] = token;
    };

    $scope.title = 'Authentication';

    $scope.login = function () {
      var credentials = {
        username: this.username,
        password: this.password
      };


      var login = Restangular.all("login");
      login.post(credentials).then(function($response) {
        console.log($response);
        self.storeToken($response.token);
      })


    }


  });
