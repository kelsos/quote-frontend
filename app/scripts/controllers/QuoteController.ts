namespace quote.controllers {
  export class QuoteController {

    constructor() {

    }
  }
}
//'use strict';
//
///**
// * @ngdoc function
// * @name quoteApp.controller:QuoteCtrl
// * @description
// * # QuoteCtrl
// * Controller of the quoteApp
// */
//angular.module('quoteApp')
//  .controller('QuoteCtrl', function ($scope, Restangular, $mdDialog) {
//
//    var quotes = Restangular.all('quote');
//    quotes.getList().then(function (results) {
//      $scope.quotes = results;
//    });
//
//    $scope.openDialog = function($event) {
//      var parentEl = angular.element(document.body);
//      $mdDialog.show({
//        parent: parentEl,
//        targetEvent: $event,
//        templateUrl: 'views/adddialog.html',
//        controller: 'AddDialogCtrl'
//      })
//    }
//  });
