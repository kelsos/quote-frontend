

import {Component} from "angular2/core";
import {RestService} from "../services/RestService";

@Component({
  selector: "login",
  templateUrl: "src/app/login/login.html"
})


export class LoginComponent {
 constructor(private restService: RestService) { }

}
