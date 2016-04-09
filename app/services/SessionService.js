System.register(["angular2/core", "angular2-jwt/angular2-jwt"], function(exports_1, context_1) {
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
    var core_1, angular2_jwt_1;
    var SessionService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            }],
        execute: function() {
            SessionService = (function () {
                function SessionService(helper) {
                    this.helper = helper;
                }
                SessionService.prototype.getToken = function () {
                    return window.localStorage.getItem("jwtToken");
                };
                SessionService.prototype.setToken = function (token) {
                    window.localStorage.setItem("jwtToken", token);
                };
                SessionService.prototype.isTokenExpired = function () {
                    return this.helper.isTokenExpired(this.getToken());
                };
                /**
                 * Clears the jwtToken stored.
                 */
                SessionService.prototype.clearSessionToken = function () {
                    window.localStorage.removeItem("jwtToken");
                };
                /**
                 * Checks if there is an non expired token available. If there is one the function returns true.
                 * Otherwise it sill return false.
                 * @returns {boolean} True or false depending on the availability and non expiry of the jwt token.
                 */
                SessionService.prototype.isSessionActive = function () {
                    return (this.getToken() != null && !this.isTokenExpired());
                };
                SessionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [angular2_jwt_1.JwtHelper])
                ], SessionService);
                return SessionService;
            }());
            exports_1("SessionService", SessionService);
        }
    }
});
//# sourceMappingURL=SessionService.js.map