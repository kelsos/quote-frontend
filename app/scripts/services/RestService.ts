///<reference path="../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../../typings/rx/rx.all.d.ts" />
///<reference path="../model/LoginResponse.ts"/>

namespace quote.services {
  import SessionService = quote.services.SessionService;
  import Quote = quote.model.Quote;
  import Response = quote.model.Response;
  import ICollectionPromise = restangular.ICollectionPromise;
  import User = quote.model.User;
  export class RestService {
    public static $inject = ['Restangular', "SessionService"];

    constructor(private restangular:restangular.IService, private session:SessionService) {

    }

    /**
     *
     * Does a remote request to the quote-backend and returns a Promise to a collection of
     * {@link User} items
     *
     * @returns {Rx.Observable<User[]>}
     */
    public loadUsers():Rx.Observable<User[]> {
      return Rx.Observable.fromPromise(this.restangular.all('/admin/users').getList());
    }

    /**
     * Does a remote request to the quote-backend api and returns a Promise to a collection of
     * {@link Quote} items;
     *
     * @returns {Rx.Observable<Quote[]>}
     */
    public loadQuotes():Rx.Observable<Quote[]> {
      return Rx.Observable.fromPromise(this.restangular.all('quote').getList());
    }

    /**
     * Attempts to login the user and returns an observable that will return a Login response and then complete.
     * @param username The user's username
     * @param password The user's password
     * @returns {Rx.Observable<LoginResponse>|Observable<LoginResponse>}
     */
    public login(username:string, password:string):Rx.Observable<model.LoginResponse> {
      return Rx.Observable.create((observer:Rx.Observer<model.LoginResponse>) => {
        var login = this.restangular.all("login");
        login.post({
          username: username,
          password: password
        }).then(($response:model.LoginResponse) => {
            this.session.setToken($response.token);
            observer.onNext($response);
            observer.onCompleted();
          }, ($response:model.LoginResponse) => {
            observer.onNext($response);
            observer.onCompleted();
          }
        );
      });
    }

    /**
     * Attempts to register the user and returns an Observable that will call the onNext once and then it
     * will complete.
     * @param username The user's username
     * @param password The user's password
     * @returns {Rx.Observable<Response>}
     */
    public register(username:string, password:string):Rx.Observable<model.Response> {
      return Rx.Observable.create((observer:Rx.Observer<model.Response>) => {
        var register = this.restangular.all("register");

        register.post({
          username: username,
          password: password
        }).then(($response:model.Response) => {
          observer.onNext($response);
          observer.onCompleted();
        }, ($response:model.Response) => {
          observer.onNext($response);
          observer.onCompleted();
        })
      });
    }

    /**
     * Attempts to call the forget password call and returns an Observable that will call the onNext once and then it
     * will complete.
     *
     * @param username The user's account identifier (email address)
     * @returns {Rx.Observable<Response>}
     */
    public resetPassword(username:string):Rx.Observable<Response> {
      return Rx.Observable.create((observer:Rx.Observer<Response>) => {
        var forgot = this.restangular.all("forgot");

        forgot.post({
          username: username
        }).then(($response:Response) => {
          observer.onNext($response);
          observer.onCompleted();
        }, ($response:Response) => {
          observer.onNext($response);
          observer.onCompleted();
        })
      })
    }
  }
}

