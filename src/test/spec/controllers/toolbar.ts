'use strict';

describe('Controller: ToolbarCtrl', () => {

  // load the controller's module
  beforeEach(module('quoteApp'));

  var ToolbarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller, $rootScope) =>{
    scope = $rootScope.$new();
    ToolbarCtrl = $controller('ToolbarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
