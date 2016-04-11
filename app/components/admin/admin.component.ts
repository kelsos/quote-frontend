import {Component} from "angular2/core";
import {RestService} from "../../services/RestService";

@Component({
  selector: "quote-admin",
  templateUrl: "app/components/admin/admin.component.html"
})

export class AdminComponent {
  constructor(private session: SessionService, private api: RestService) { }
}
