'use strict';

/**
 * @ngdoc overview
 * @name quoteApp
 * @description
 * # quoteApp
 *
 * Main module of the application.
 */
angular
  .module('quoteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'angular-jwt',
    'restangular'
  ])
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
  .config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://api.quote.dev/');
  }).config(function Config($httpProvider, jwtInterceptorProvider) {

    jwtInterceptorProvider.tokenGetter = function () {
      return localStorage.getItem('jwtToken');
    };

    $httpProvider.interceptors.push('jwtInterceptor');
  });

