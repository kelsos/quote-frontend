namespace quote.controllers {

  export class RetrievePasswordController {
    public username:string;

    public static $inject = ['$mdDialog', 'RestService', '$location'];

    constructor(private restService:quote.services.RestService) {

    }

    public sendMail():void {
      this.restService.resetPassword(this.username).subscribe((response:quote.model.IApiResponse) => {
        if (response.code == 200)  {

        } else {

        }
      })
    }
  }
}
