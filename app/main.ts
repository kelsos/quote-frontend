import {bootstrap} from "angular2/platform/browser";
import {FORM_PROVIDERS} from "angular2/common";
import {ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS, Http} from "angular2/http";
import {AuthHttp, AuthConfig} from "angular2-jwt/angular2-jwt";
import {provide} from "angular2/core";
import {AppComponent} from "./app.component.ts";

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  FORM_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(AuthHttp, {
    useFactory: (http) => {
      return new AuthHttp(
        new AuthConfig({
        tokenName: "jwt"
      }), http);
    },
    deps: [Http]
  })
]);
