///<reference path="../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../../typings/rx/rx.all.d.ts" />

module quote.services {
  export class RestService {
    public static $inject = ['Restangular'];
    constructor(private restangular:restangular.IService) {

    }

    /**
     *
     * Does a remote request to the quote-backend and returns a Promise to a collection of
     * {@link model.User} items
     *
     * @returns {ICollectionPromise<model.User>|ICollectionPromise<T>}
     */
    public loadUsers():restangular.ICollectionPromise<model.User> {
      var users = this.restangular.all('/admin/users');
      return users.getList();
    }

    /**
     * Does a remote request to the quote-backend api and returns a Promise to a collection of
     * {@link model.Quote} items;
     *
     * @returns {ICollectionPromise<model.Quote>|ICollectionPromise<T>}
     */
    public loadQuotes():restangular.ICollectionPromise<model.Quote> {
      var quotes = this.restangular.all('quote');
      return quotes.getList();
    }

    /**
     * Attempts to login the user and returns an observable that will return a Login response and then complete.
     * @param username The user's username
     * @param password The user's password
     * @returns {Rx.Observable<model.LoginResponse>|Observable<model.LoginResponse>}
     */
    public login(username:string, password:string):Rx.Observable<model.LoginResponse> {
      return Rx.Observable.create((observer:Rx.Observer<model.LoginResponse>) => {
        var login = this.restangular.all("login");
        login.post({
          username: username,
          password: password
        }).then(($response:model.LoginResponse) => {
            SessionService.setToken($response.token);
            observer.onNext($response);
            observer.onCompleted();
          }, ($response:model.LoginResponse) => {
            observer.onNext($response);
            observer.onCompleted();
          }
        );
      });
    }
  }
}

