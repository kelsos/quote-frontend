import {Component} from "angular2/core";
import {RouteConfig} from "angular2/router";
import {LoginComponent} from "./login/LoginComponent";

@Component({
  selector: "app"
})

@RouteConfig([
  {
    path: "/login",
    name: "Login",
    component: LoginComponent
  },
  {
    path: "/quote",
    name: "Quotes",
    component: LoginComponent
  }
])


export class AppComponent {}
