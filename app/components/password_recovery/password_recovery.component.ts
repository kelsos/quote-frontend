
import {Component} from "angular2/core";
import {RestService} from "../../services/RestService";
import {IApiResponse} from "../../model/ILoginResponse";

@Component({
  selector: "quote-recovery",
  templateUrl: "app/components/password_recovery/password_recovery.component.html"
})

export class PasswordRecoveryComponent {
  protected username: string = "";

  constructor(private service: RestService) { }

  public sendMail():void {
    this.service.resetPassword(this.username).subscribe((response: IApiResponse) => {
      if (response.code == 200)  {

      } else {

      }
    });
  }
}
