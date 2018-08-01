import { Component } from '@angular/core';
import { User } from '../../model/User';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-registration',
  templateUrl: 'app/components/register/registration.component.html',
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
