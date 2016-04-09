import {Component} from "angular2/core";
import {RestService} from "../../services/RestService";
import {SessionService} from "../../services/SessionService";

@Component({
  selector: "quote-admin",
  templateUrl: "../..//components/admin/admin.component.html"
})

export class AdminComponent {
  constructor(private session: SessionService, private api: RestService) { }
}