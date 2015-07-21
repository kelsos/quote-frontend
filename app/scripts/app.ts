///<reference path="../../typings/restangular/restangular.d.ts"/>
///<reference path="../../typings/angular-jwt/angular-jwt.d.ts"/>
///<reference path="../../typings/angularjs/angular.d.ts"/>
///<reference path="../../typings/angularjs/angular-route.d.ts"/>
///<reference path="../../typings/angularjs/angular-route.d.ts"/>

/// <reference path="controllers/AddDialogController.ts" />
/// <reference path="controllers/AdminController.ts" />
/// <reference path="controllers/LoginController.ts" />
/// <reference path="controllers/MainController.ts" />
/// <reference path="controllers/QuoteController.ts" />
/// <reference path="controllers/RegistrationController.ts" />
/// <reference path="controllers/RetrievePasswordController.ts" />
/// <reference path="controllers/ToolbarController.ts" />
/// <reference path="directives/NgEnter.ts" />
/// <reference path="model/LoginResponse.ts" />
/// <reference path="model/Quote.ts" />
/// <reference path="model/User.ts" />
/// <reference path="services/RestService.ts" />
/// <reference path="services/SessionService.ts" />

'use strict';

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
    'restangular',
    'linkify'
  ])
  .controller('ToolbarController',quote.controllers.ToolbarController)
  .controller('RetrievePasswordController', quote.controllers.RetrievePasswordController)
  .controller('RegistrationController', quote.controllers.RegistrationController)
  .controller('QuoteController', quote.controllers.QuoteController)
  .controller('MainController', quote.controllers.MainController)
  .controller('LoginController', quote.controllers.LoginController)
  .controller('AdminController', quote.controllers.AdminController)
  .controller('AddDialogController', quote.controllers.AddDialogController)
  .service('SessionService', quote.services.SessionService)
  .service('RestService', quote.services.RestService)
  .directive('ngEnter', ()=> quote.directives.NgEnter)
  .config(($routeProvider:ng.route.IRouteProvider) => {
    $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
      .when('/quote', {
        templateUrl: 'views/quote.html',
        controller: 'QuoteController',
        controllerAs: 'quote'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminController',
        controllerAs: 'admin'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegistrationController',
        controllerAs: 'register'
      })
      .when('/forgot-password', {
        templateUrl: 'views/forgot-password.html',
        controller: 'RetrievePasswordController',
        controllerAs: 'retrieve'
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



