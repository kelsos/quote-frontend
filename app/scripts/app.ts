///<reference path="../../typings/restangular/restangular.d.ts"/>
///<reference path="../../typings/angular-jwt/angular-jwt.d.ts"/>
///<reference path="../../typings/angularjs/angular.d.ts"/>
///<reference path="../../typings/angularjs/angular-route.d.ts"/>
///<reference path="../../typings/angularjs/angular-route.d.ts"/>
///<reference path="reference.ts"/>

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
  ])
  .controller('ToolbarController', controllers.ToolbarController)
  .controller('RetrievePasswordController', controllers.RetrievePasswordController)
  .controller('RegistrationController', controllers.RegistrationController)
  .controller('QuoteController', controllers.QuoteController)
  .controller('MainController', controllers.MainController)
  .controller('LoginController', controllers.LoginController)
  .controller('AdminController', controllers.AdminController)
  .controller('AddDialogController', controllers.AddDialogController)
  .service('SessionService', services.SessionService)
  .service('RestService', services.RestService)
  .directive('ngEnter', ()=> directives.NgEnter)
  .config(($routeProvider:ng.route.IRouteProvider) => {
    $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainController'
    })
      .when('/quote', {
        templateUrl: 'views/quote.html',
        controller: 'QuoteController'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegistrationController'
      })
      .when('/forgot-password', {
        templateUrl: 'views/forgot-password.html',
        controller: 'RetrievePasswordController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config((RestangularProvider:restangular.IProvider) => {
    RestangularProvider.setBaseUrl('http://api.quote.dev/');
  }).config(($httpProvider:ng.IHttpProvider, jwtInterceptorProvider:angular.jwt.IJwtInterceptor) => {
    jwtInterceptorProvider.tokenGetter = () => {
      return localStorage.getItem('jwtToken');
    };

    $httpProvider.interceptors.push('jwtInterceptor');
  }).filter('newlines', function () {
    return (data) => {
      if (!data) return data;
      return data.replace(/(?:\r\n|\r|\n)/g, '<br />');
    }
  }).filter('dateConvert', function () {
    return (data) => {
      if (!data) return data;
      data.replace('Z', 'UTC');
      var date = new Date(data);
      return date.toLocaleString();
    }
  }).config(($routeProvider, $httpProvider) => {
    $httpProvider.interceptors.push('responseObserver');
  }).factory('responseObserver', ($q, $location)=> {
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



