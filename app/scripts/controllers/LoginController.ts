namespace quote.controllers {
  'use strict';
  export class LoginController {

    public username:string;
    public password:string;

    public title = "Enter the quote";

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
      var username = this.username,
        password = this.password;

      if (username == undefined || username.length == 0 || password == undefined || password.length == 0) {
        this.showAlert("Please fill properly the username and password fields.");
        return;
      }

      this.api.login(username, password)
        .subscribe((response:model.LoginResponse) => {
          if (response.code == 200) {
            this.location.path("/quote")
          } else {
            this.showAlert(response.description);
          }
        });
    }

    private showAlert(description:string) {

      var dialogService = this.dialog;

      var alertDialog = dialogService.alert({
        title: 'Error',
        content: description,
        ok: 'Close'
      });
      dialogService.show(alertDialog);
    }

    public forgotPassword():void {
      this.location.path("/forgot-password")
    }
  }
}
