import {Component} from "angular2/core";
import {User} from "../../model/User";
import {RestService} from "../../services/RestService";
import {Router} from "angular2/router";

@Component({
  selector: "login",
  templateUrl: "/login.html",
  providers: [Router, RestService]
})

export class LoginComponent {
  public title: string = "Login";
  public model: User = new User();

  constructor(private service: RestService, private router: Router) {
  }

  public login():void {
    this.service.login(this.model).subscribe(resp => {
      if (resp.success) {

      }
    });
  }

}
