///<reference path="../../../typings/angular-material/angular-material.d.ts"/>
module quote.controllers {
  export class RegistrationController {
    public username:string;
    public password:string;
    public confirmation:string;

    public static $inject = ['$mdDialog', 'RestService'];

    constructor(private dialogService:ng.material.IDialogService, private restService: quote.services.RestService) {

    }

    public proceed():void {
      var username = this.username,
        password = this.password,
        confirmation = this.confirmation;


      if (password !== confirmation) {

      }
    }

    private showAlert(description:string) {

      var dialogService = this.dialogService;

      var alertDialog = dialogService.alert({
        title: 'Error',
        content: description,
        ok: 'Close'
      });
      dialogService.show(alertDialog);
    }
  }
}
