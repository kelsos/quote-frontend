///<reference path="../../../typings/angularjs/angular.d.ts"/>

module controllers {
  export class ToolbarController {

    public static $inject = ["$location"];

    constructor(private location:ng.ILocationService) {

    }

    public navigateLogin():void {
      this.location.path('/login');
    }

    public navigateRegister():void {
      this.location.path('/register');
    }
  }
}

