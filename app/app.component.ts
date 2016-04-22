import {Component} from "angular2/core";
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from "angular2/router";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {RegistrationComponent} from "./components/register/registration.component";
import {PasswordRecoveryComponent} from "./components/password_recovery/password_recovery.component";
import {QuoteComponent} from "./components/quote/quote.component";
import {JwtHelper} from "angular2-jwt/angular2-jwt";

@Component({
  selector: "quote-app",
  templateUrl: "app/app.component.html",
  directives: [HomeComponent, LoginComponent, RouterOutlet, ROUTER_DIRECTIVES]
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

export class AppComponent {
  private jwtHelper: JwtHelper;

  constructor() {
    this.jwtHelper = new JwtHelper();
  }

  /**
   * Checks if the user session is active
   *
   * @returns {boolean}
   */
  public isLogged(): boolean {
    let token: string = localStorage.getItem("id_token");
    return token && !this.jwtHelper.isTokenExpired(token);
  }
}
