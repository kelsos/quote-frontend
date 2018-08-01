import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtInterceptor } from "@auth0/angular-jwt";

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordRecoveryComponent } from './components/password_recovery/password_recovery.component';
import { QuoteComponent } from './components/quote/quote.component';
import { RegistrationComponent } from './components/register/registration.component';
import { AppRoutingModule } from './modules/app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        AdminComponent,
        HomeComponent,
        LoginComponent,
        PasswordRecoveryComponent,
        QuoteComponent,
        RegistrationComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
