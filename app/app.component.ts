import {Component} from "angular2/core";
import {RouteConfig, RouterOutlet} from "angular2/router";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import {RegistrationComponent} from "./components/register/registration.component";
import {PasswordRecoveryComponent} from "./components/password_recovery/password_recovery.component";
import {QuoteComponent} from "./components/quote/quote.component";

@Component({
  selector: "quote-app",
  templateUrl: "app/app.component.html",
  directives: [HomeComponent, ToolbarComponent, LoginComponent, RouterOutlet]
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
  }, {
    path: "/password-reset",
    name: "PasswordReset",
    component: PasswordRecoveryComponent
  }, {
    path: "/quote",
    name: "Quote",
    component: QuoteComponent
  }
])

export class AppComponent {}
