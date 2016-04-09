import {User} from "../../model/User";
import {RestService} from "../../services/RestService";
import {Component} from "angular2/core";

@Component({
  selector: "quote-registration",
  templateUrl: "../..//components/register/registration.component.html",
  providers: [RestService]
})

export class RegistrationComponent {
  protected model: User = new User();
  protected confirmation: string;

  constructor(private service: RestService) { }

  public register(): void {
    this.service.register(this.model).subscribe();
  }

}
