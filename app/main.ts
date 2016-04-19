import {bootstrap} from "angular2/platform/browser";
import {FORM_PROVIDERS} from "angular2/common";
import {ROUTER_PROVIDERS, APP_BASE_HREF} from "angular2/router";
import {HTTP_PROVIDERS, Http} from "angular2/http";
import {AuthHttp, AuthConfig} from "angular2-jwt/angular2-jwt";
import {provide} from "angular2/core";
import {AppComponent} from "./app.component";

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  FORM_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(AuthHttp, {
      useFactory: (http: Http): AuthHttp => {
        return new AuthHttp(new AuthConfig(), http);
      },
      deps: [Http]
    }
  ), provide(APP_BASE_HREF, {useValue: "/"})
]);


