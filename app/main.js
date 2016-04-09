System.register(["angular2/platform/browser", "angular2/common", "angular2/router", "angular2/http", "angular2-jwt/angular2-jwt", "angular2/core", "./app.component.ts"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, common_1, router_1, http_1, angular2_jwt_1, core_1, app_component_ts_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_component_ts_1_1) {
                app_component_ts_1 = app_component_ts_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_ts_1.AppComponent, [
                http_1.HTTP_PROVIDERS,
                common_1.FORM_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                core_1.provide(angular2_jwt_1.AuthHttp, {
                    useFactory: function (http) {
                        return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig({
                            tokenName: "jwt"
                        }), http);
                    },
                    deps: [http_1.Http]
                })
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map