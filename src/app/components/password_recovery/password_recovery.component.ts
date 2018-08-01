import { Component } from '@angular/core';
import { IApiResponse } from '../../model/ILoginResponse';
import { RestService } from '../../services/rest.service';

@Component({
    selector: 'app-password-recovery',
    templateUrl: 'app/components/password_recovery/password_recovery.component.html'
})

export class PasswordRecoveryComponent {
    protected username = '';

    constructor(private service: RestService) {
    }

    public sendMail(): void {
        this.service.resetPassword(this.username).subscribe((response: IApiResponse) => {
            if (response.code == 200) {

            } else {

            }
        });
    }
}
