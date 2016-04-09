System.register(["angular2/core", "../../services/RestService"], function(exports_1, context_1) {
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
    var core_1, RestService_1;
    var PasswordRecoveryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (RestService_1_1) {
                RestService_1 = RestService_1_1;
            }],
        execute: function() {
            PasswordRecoveryComponent = (function () {
                function PasswordRecoveryComponent(service) {
                    this.service = service;
                    this.username = "";
                }
                PasswordRecoveryComponent.prototype.sendMail = function () {
                    this.service.resetPassword(this.username).subscribe(function (response) {
                        if (response.code == 200) {
                        }
                        else {
                        }
                    });
                };
                PasswordRecoveryComponent = __decorate([
                    core_1.Component({
                        selector: "quote-recovery",
                        templateUrl: "../..//components/password_recovery/password_recovery.component.html"
                    }), 
                    __metadata('design:paramtypes', [RestService_1.RestService])
                ], PasswordRecoveryComponent);
                return PasswordRecoveryComponent;
            }());
            exports_1("PasswordRecoveryComponent", PasswordRecoveryComponent);
        }
    }
});
//# sourceMappingURL=password_recovery.component.js.map