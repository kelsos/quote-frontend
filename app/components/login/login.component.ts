import {Component} from "angular2/core";
import {User} from "../../model/User";
import {RestService} from "../../services/RestService";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
  selector: "quote-login",
  templateUrl: "app/components/login/login.component.html",
  providers: [RestService],
  directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent {
  public title: string = "Login";
  public model: User = new User();

  constructor(private service: RestService) {
  }

  public login(): void {
    console.log("Attempting login");
    this.service.login(this.model).subscribe(resp => {
      if (resp.success) {

      } else {

      }
      console.log(resp);
    });
  }

}
