import {Component} from "angular2/core";
import {SessionService} from "../../services/SessionService";
@Component({
  selector: "quote-toolbar",
  templateUrl: "app/components/toolbar/toolbar.component.html"
})

export class ToolbarComponent {
  constructor(private session: SessionService) {
  }

  /**
   * Checks if the user session is active
   *
   * @returns {boolean}
   */
  public isLogged():boolean {
    return this.session.isSessionActive();
  }
}
