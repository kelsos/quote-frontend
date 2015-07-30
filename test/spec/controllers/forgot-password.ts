'use strict';

describe('Controller: ForgotPasswordCtrl', () => {

  // load the controller's module
  beforeEach(module('quoteApp'));

  var ForgotPasswordCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller, $rootScope) => {
    scope = $rootScope.$new();
    ForgotPasswordCtrl = $controller('ForgotPasswordCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
