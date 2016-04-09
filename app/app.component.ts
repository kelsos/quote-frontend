import {Component} from "angular2/core";
import {RouteConfig} from "angular2/router";
import {LoginComponent} from "./components/login/LoginComponent";
import {HomeComponent} from "./components/home/home.component.ts";


@Component({
  selector: "app",
  templateUrl: "/app.component.html",
  directives: [HomeComponent]
})

@RouteConfig([
  {
    path: "/login",
    name: "Login",
    component: LoginComponent
  },
  {
    path: "/home",
    name: "Home",
    component: HomeComponent,
    useAsDefault: true
  }
])

export class AppComponent {}
