import {Component} from "angular2/core";
import {SessionService} from "../../services/SessionService";
import {JwtHelper} from "angular2-jwt/angular2-jwt";
@Component({
  selector: "quote-toolbar",
  templateUrl: "app/components/toolbar/toolbar.component.html",
  providers: [SessionService]
})

export class ToolbarComponent {
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
    return !this.jwtHelper.isTokenExpired(token);
  }
}
