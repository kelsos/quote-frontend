import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ROUTER_PROVIDERS } from '../../../../node_modules/@angular/router/src/router_module';
import { User } from '../../model/User';
import { RestService } from '../../services/rest.service';

@Component({
    selector: 'app-login',
    templateUrl: 'app/components/login/login.component.html',
    styleUrls: ['app/components/login/login.component.css'],
    providers: [RestService, ROUTER_PROVIDERS],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})

export class LoginComponent {
    public title = 'Login';
    public model: User = new User();
    private form: ControlGroup;

    constructor(private service: RestService, private formBuilder: FormBuilder, private router: Router) {
        this.form = formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    public login(): void {
        console.log('Attempting login');
        this.service.login(this.model).subscribe(resp => {
            if (resp.code === 200) {
                this.router.navigate(['./Quote']);
            } else {

            }
            console.log(resp);
        });
    }

}
