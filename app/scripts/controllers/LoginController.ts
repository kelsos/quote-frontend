module controllers {
  'use strict';
  export class LoginController {

    public username:string;
    public password:string;

    public static $inject = ['$mdDialog', '$location', 'SessionService', 'RestService'];

    constructor(private dialog:angular.material.IDialogService,
                private location:ng.ILocationService,
                private session:services.SessionService,
                private api:services.RestService) {

      if (session.isSessionActive()) {
        location.path('quote');
      }

    }

    public login():void {
      this.api.login(this.username, this.password).subscribe((response:model.LoginResponse) => {
        if (response.code == 200) {

        } else {

        }
      });
    }

  }
}
