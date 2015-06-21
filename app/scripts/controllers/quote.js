'use strict';

/**
 * @ngdoc function
 * @name quoteApp.controller:QuoteCtrl
 * @description
 * # QuoteCtrl
 * Controller of the quoteApp
 */
angular.module('quoteApp')
  .controller('QuoteCtrl', function ($scope, Restangular) {

    var quotes = Restangular.all('quote');
    quotes.getList().then(function (results) {
      $scope.quotes = results;
      console.log(results)
    });
  });
