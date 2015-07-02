'use strict';

var app = angular
  .module('quoteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'angular-jwt',
    'restangular',
    'linkify'
  ]);
/**
 * @ngdoc overview
 * @name quoteApp
 * @description
 * # quoteApp
 *
 * Main module of the application.
 */
app
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/quote', {
        templateUrl: 'views/quote.html',
        controller: 'QuoteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function (RestangularProvider) {
    RestangularProvider.setBaseUrl('http://api.quote.dev/');
  }).config(function Config($httpProvider, jwtInterceptorProvider) {

    jwtInterceptorProvider.tokenGetter = function () {
      return localStorage.getItem('jwtToken');
    };

    $httpProvider.interceptors.push('jwtInterceptor');
  });

app.filter('newlines', function () {
  return function (data) {
    if (!data) return data;
    return data.replace(/(?:\r\n|\r|\n)/g, '<br />');
  }
});

app.filter('dateConvert', function () {
  return function (data) {
    if (!data) return data;
    data.replace('Z', 'UTC');
    var date = new Date(data);
    return date.toLocaleString();
  }
});

app.config(function ($routeProvider, $httpProvider) {
  $httpProvider.interceptors.push('responseObserver');
});

app.factory('responseObserver', function responseObserver($q, $location) {
  return {
    'responseError': function (errorResponse) {
      switch (errorResponse.status) {
        case 403:
          $location.path("/");
          break;
      }
      return $q.reject(errorResponse);
    }
  }
});

