System.register(["angular2/core", "angular2/http", "rxjs/Observable", "rxjs/Rx"], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var RestService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            RestService = (function () {
                function RestService(http) {
                    this.http = http;
                    this.API_URL = "http://localhost:3001/api";
                    this._usersUrl = "/admin/users";
                    this._quotesUrl = "/quotes";
                    this._loginUrl = "/login";
                    this._registerUrl = "/register";
                    this._passwordReset = "/forgot";
                }
                RestService.handleError = function (error) {
                    console.log(error);
                    return Observable_1.Observable.throw(error.json().error || "Server Error");
                };
                /**
                 *
                 * Does a remote request to the quote-backend and returns a Promise to a collection of
                 * {@link IUser} items
                 *
                 * @returns {Observable<IUser[]>}
                 */
                RestService.prototype.loadUsers = function () {
                    return this.http.get(this._usersUrl)
                        .map(function (res) { return res.json().data; })
                        .catch(RestService.handleError);
                };
                /**
                 * Does a remote request to the quote-backend api and returns a Promise to a collection of
                 * {@link IQuote} items;
                 *
                 * @returns {Observable<IQuote[]>}
                 */
                RestService.prototype.loadQuotes = function () {
                    return this.http.get(this._quotesUrl)
                        .map(function (res) { return res.json().data; })
                        .catch(RestService.handleError);
                };
                /**
                 * Attempts to login the user and returns an observable that will return a Login response and then complete.
                 * @param user The user's username
                 * @returns {Observable<ILoginResponse>}
                 */
                RestService.prototype.login = function (user) {
                    var body = JSON.stringify({
                        username: user.username,
                        password: user.password
                    });
                    var headers = new http_1.Headers({ "Content-Type": "application/json" });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this._loginUrl, body, options)
                        .map(function (res) { return res.json(); })
                        .catch(RestService.handleError);
                };
                /**
                 * Attempts to register the user and returns an Observable that will call the onNext once and then it
                 * will complete.
                 * @param user The user that will register
                 * @returns {Observable<IApiResponse>}
                 */
                RestService.prototype.register = function (user) {
                    var body = JSON.stringify({
                        username: user.username,
                        password: user.password
                    });
                    var headers = new http_1.Headers({ "Content-Type": "application/json" });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this._registerUrl, body, options)
                        .map(function (res) { return res.json(); })
                        .catch(RestService.handleError);
                };
                /**
                 * Attempts to call the forget password call and returns an Observable that will call the onNext once and then it
                 * will complete.
                 *
                 * @param username The user's account identifier (email address)
                 * @returns {Observable<IApiResponse>}
                 */
                RestService.prototype.resetPassword = function (username) {
                    var body = JSON.stringify({
                        username: username
                    });
                    var headers = new http_1.Headers({ "Content-Type": "application/json" });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this._passwordReset, body, options)
                        .map(function (res) { return res.json(); })
                        .catch(RestService.handleError);
                };
                RestService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RestService);
                return RestService;
            }());
            exports_1("RestService", RestService);
        }
    }
});
//# sourceMappingURL=RestService.js.map