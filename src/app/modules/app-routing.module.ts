import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { PasswordRecoveryComponent } from '../components/password_recovery/password_recovery.component';
import { QuoteComponent } from '../components/quote/quote.component';
import { RegistrationComponent } from '../components/register/registration.component';

const appRoutes: Routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent
    },
    {
        path: '/home',
        name: 'Home',
        component: HomeComponent,
        useAsDefault: true
    }, {
        path: '/register',
        name: 'Register',
        component: RegistrationComponent
    }, {
        path: '/password-reset',
        name: 'PasswordReset',
        component: PasswordRecoveryComponent
    }, {
        path: '/quote',
        name: 'Quote',
        component: QuoteComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
