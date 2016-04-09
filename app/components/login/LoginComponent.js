System.register(["angular2/core", "../../model/User", "../../services/RestService", "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, User_1, RestService_1, router_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (User_1_1) {
                User_1 = User_1_1;
            },
            function (RestService_1_1) {
                RestService_1 = RestService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(service, router) {
                    this.service = service;
                    this.router = router;
                    this.title = "Login";
                    this.model = new User_1.User();
                }
                LoginComponent.prototype.login = function () {
                    this.service.login(this.model).subscribe(function (resp) {
                        if (resp.success) {
                        }
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: "login",
                        templateUrl: "/login.html",
                        providers: [router_1.Router, RestService_1.RestService]
                    }), 
                    __metadata('design:paramtypes', [RestService_1.RestService, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=LoginComponent.js.map