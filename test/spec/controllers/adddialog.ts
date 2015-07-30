///<reference path="../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
'use strict';

describe('Controller: AddDialogCtrl', () => {

  // load the controller's module
  beforeEach(module('quoteApp'));

  var AdddialogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller, $rootScope) => {
    scope = $rootScope.$new();
    AdddialogCtrl = $controller('AddDialogCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
