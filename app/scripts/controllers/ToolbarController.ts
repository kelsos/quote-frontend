///<reference path="../../../typings/angularjs/angular.d.ts"/>

module quote.controllers {
  export class ToolbarController {

    public static $inject = ["$location", 'SessionService'];

    constructor(private location:ng.ILocationService, private session:quote.services.SessionService) {

    }

    public userIsLogged():boolean {
      return this.session.isSessionActive()
    }

    public navigateLogin():void {
      this.location.path('/login');
    }

    public navigateRegister():void {
      this.location.path('/register');
    }
  }
}

