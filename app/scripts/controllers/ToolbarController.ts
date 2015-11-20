namespace quote.controllers {
  import SessionService = quote.services.SessionService;

  export class ToolbarController {
    public static $inject = ["$location", 'SessionService'];

    constructor(private location:ng.ILocationService, private session:quote.services.SessionService) {

    }

    public userIsLogged():boolean {
      return this.session.isSessionActive();
    }

    public navigateLogin():void {
      this.location.path("/login");
    }

    public navigateRegister():void {
      this.location.path("/register");
    }

    public logout():void {
      this.session.clearSessionToken();
      this.location.path("/");
    }
  }
}

