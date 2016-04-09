import {Injectable} from "angular2/core";
import {IUser} from "../model/IUser";
import {IQuote} from "../model/IQuote";
import {ILoginResponse, IApiResponse} from "../model/ILoginResponse";
import {Http, Response, Headers, RequestOptions} from "angular2/http";
import {Observable}     from "rxjs/Observable";
import {SessionService} from "./SessionService";
import * from 'rxjs/Rx';

@Injectable()
export class RestService {

  constructor(private session: SessionService, private http: Http) { }

  private _usersUrl: string = "/admin/users";
  private _quotesUrl: string = "/quotes";
  private _loginUrl: string = "/login";
  private _registerUrl: string = "/register";
  private _passwordReset: string = "/forgot";

  /**
   *
   * Does a remote request to the quote-backend and returns a Promise to a collection of
   * {@link IUser} items
   *
   * @returns {Observable<IUser[]>}
   */
  public loadUsers(): Observable<IUser[]> {
    return this.http.get(this._usersUrl).map(res => <IUser[]> res.json().data)
      .catch(RestService.handleError);
  }

  /**
   * Does a remote request to the quote-backend api and returns a Promise to a collection of
   * {@link IQuote} items;
   *
   * @returns {Observable<IQuote[]>}
   */
  public loadQuotes(): Observable<IQuote[]> {
    return this.http.get(this._quotesUrl).map(res => <IQuote[]>res.json().data)
      .catch(RestService.handleError);
  }

  /**
   * Attempts to login the user and returns an observable that will return a Login response and then complete.
   * @param username The user's username
   * @param password The user's password
   * @returns {Observable<ILoginResponse>}
   */
  public login(username: string, password: string): Observable<ILoginResponse> {
    let body: string = JSON.stringify({
      username: username,
      password: password
    });

    let headers: Headers = new Headers({ "Content-Type": "application/json" });
    let options: RequestOptions = new RequestOptions({ headers: headers});

    return this.http.post(this._loginUrl, body, options).map(res => <ILoginResponse>res.json())
      .catch(RestService.handleError);
  }

  /**
   * Attempts to register the user and returns an Observable that will call the onNext once and then it
   * will complete.
   * @param username The user's username
   * @param password The user's password
   * @returns {Observable<IApiResponse>}
   */
  public register(username: string, password: string): Observable<IApiResponse> {
    let body: string = JSON.stringify({
      username: username,
      password: password
    });

    let headers: Headers = new Headers({ "Content-Type": "application/json" });
    let options: RequestOptions = new RequestOptions({ headers: headers});

    return this.http.post(this._registerUrl, body, options).map(res => <IApiResponse>res.json())
      .catch(RestService.handleError);
  }

  /**
   * Attempts to call the forget password call and returns an Observable that will call the onNext once and then it
   * will complete.
   *
   * @param username The user's account identifier (email address)
   * @returns {Observable<IApiResponse>}
   */
  public resetPassword(username: string): Observable<ApiResponse> {
    let body: string = JSON.stringify({
      username: username
    });

    let headers: Headers = new Headers({ "Content-Type": "application/json" });
    let options: RequestOptions = new RequestOptions({ headers: headers});

    return this.http.post(this._passwordReset, body, options).map(res => <IApiResponse>res.json())
      .catch(RestService.handleError);
  }

  private static handleError(error: Response): void {
    console.log(error);
    return Observable.throw(error.json().error || "Server Error");
  }
}


