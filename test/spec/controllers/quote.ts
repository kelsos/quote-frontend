'use strict';

describe('Controller: QuoteCtrl', () => {

  // load the controller's module
  beforeEach(module('quoteApp'));

  var QuoteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller, $rootScope) => {
    scope = $rootScope.$new();
    QuoteCtrl = $controller('QuoteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
