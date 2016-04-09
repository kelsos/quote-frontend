///<reference path="../../../typings/angular-material/angular-material.d.ts"/>
namespace quote.controllers {
  export class RegistrationController {
    public username:string;
    public password:string;
    public confirmation:string;

    public static $inject = ['$mdDialog', 'RestService', '$location'];

    constructor(private dialogService:ng.material.IDialogService,
                private restService:quote.services.RestService,
                private locationService:ng.ILocationService) {
    }

    public proceed():void {
      var username = this.username,
        password = this.password,
        confirmation = this.confirmation;


      var nonEmpty = password != undefined && password.length > 0;

      if (nonEmpty && (password !== confirmation)) {
        this.showAlert("Confirmation doesn't much the supplied password");
      }

      this.restService.register(username, password)
        .subscribe((response:quote.model.IApiResponse) => {
          if (response.code == 200)  {
            this.locationService.path('/registration-successful');
          } else {
            this.showAlert(response.description);
          }
        });
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
