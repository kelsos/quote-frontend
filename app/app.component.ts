import {Component} from "angular2/core";
import {RouteConfig} from "angular2/router";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component.ts";
import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import {RegistrationComponent} from "./components/register/registration.component";

@Component({
  selector: "quote-app",
  templateUrl: "app/app.component.html",
  directives: [HomeComponent, ToolbarComponent]
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
  }, {
    path: "/register",
    name: "Register",
    component: RegistrationComponent
  }
])

export class AppComponent {}
