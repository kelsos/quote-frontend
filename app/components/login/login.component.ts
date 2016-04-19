import {Component} from "angular2/core";
import {User} from "../../model/User";
import {RestService} from "../../services/RestService";
import {ROUTER_DIRECTIVES, Router, ROUTER_PROVIDERS} from "angular2/router";
import {FormBuilder, ControlGroup, FORM_DIRECTIVES, Validators} from "angular2/common";

@Component({
  selector: "quote-login",
  templateUrl: "app/components/login/login.component.html",
  providers: [RestService, ROUTER_PROVIDERS],
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})

export class LoginComponent {
  public title: string = "Login";
  public model: User = new User();
  private form: ControlGroup;

  constructor(private service: RestService, private formBuilder: FormBuilder, private router: Router) {
    this.form = formBuilder.group({
        username: ["", Validators.required],
        password: ["", Validators.required]
    });
  }

  public login(): void {
    console.log("Attempting login");
    this.service.login(this.model).subscribe(resp => {
      if (resp.code === 200) {
        this.router.navigate(["./Quote"]);
      } else {

      }
      console.log(resp);
    });
  }

}
