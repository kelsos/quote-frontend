module directives {
  export class NgEnter implements ng.IDirective {
    constructor(scope:ng.IScope, element:ng.IRootElementService, attrs:ng.IAttributes) {
      element.bind('keydown keypress', function (event) {
        if (event.which === 13) {
          scope.$apply(function () {
            scope.$eval(attrs['ngEnter']);
          });
          event.preventDefault();
        }
      })
    }
  }
}
