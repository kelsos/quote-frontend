import {Injectable} from "angular2/core";
import {IUser} from "../model/IUser";
import {IQuote} from "../model/IQuote";
import {ILoginResponse, IApiResponse} from "../model/ILoginResponse";
import {Response, Headers, RequestOptions, Http, URLSearchParams} from "angular2/http";
import {Observable}     from "rxjs/Observable";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
import {User} from "../model/User";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import {AuthHttp} from "angular2-jwt/angular2-jwt";
import {IPage} from "../model/IPage";

@Injectable()
export class RestService {

  constructor(private authHttp: AuthHttp, private http: Http) { }

  private API_URL: string = "http://api.quote.dev";
  private _usersUrl: string = `${this.API_URL}/admin/users`;
  private _quotesUrl: string = `${this.API_URL}/quote`;
  private _loginUrl: string = `${this.API_URL}/login`;
  private _registerUrl: string = `${this.API_URL}/register`;
  private _passwordReset: string = `${this.API_URL}/forgot`;

  protected handleError(error: Response): ErrorObservable {
    console.log(error);
    return Observable.throw(error.json().error || "Server Error");
  }

  /**
   *
   * Does a remote request to the quote-backend and returns a Promise to a collection of
   * {@link IUser} items
   *
   * @returns {Observable<IUser[]>}
   */
  public loadUsers(): Observable<IUser[]> {
    return this.authHttp.get(this._usersUrl)
      .map(res => <IUser[]> res.json().data)
      .catch(this.handleError);
  }

  /**
   * Does a remote request to the quote-backend api and returns a Promise to a collection of
   * {@link IQuote} items;
   *
   * @returns {Observable<IPage<IQuote[]>>}
   */
  public loadQuotes(offset: number = 0, limit: number = 10): Observable<IPage<IQuote[]>> {
    let params: URLSearchParams = new URLSearchParams();
    params.append("limit", String(limit));
    params.append("offset", String(offset));

    return this.authHttp.get(this._quotesUrl, {
      search: params
    })
      .map(res => <IPage<IQuote[]>>res.json())
      .catch(this.handleError);
  }

  /**
   * Attempts to login the user and returns an observable that will return a Login response and then complete.
   * @param user The user's username
   * @returns {Observable<ILoginResponse>}
   */
  public login(user: User): Observable<ILoginResponse> {
    let body: string = JSON.stringify({
      username: user.username,
      password: user.password
    });

    let headers: Headers = new Headers({ "Content-Type": "application/json" });
    let options: RequestOptions = new RequestOptions({ headers: headers});

    return this.http.post(this._loginUrl, body, options)
      .map(res => <ILoginResponse>res.json())
      .do((next: ILoginResponse) => {
        localStorage.setItem("id_token", next.token);
        console.log(next.token);
      })
      .catch(this.handleError);
  }

  /**
   * Attempts to register the user and returns an Observable that will call the onNext once and then it
   * will complete.
   * @param user The user that will register
   * @returns {Observable<IApiResponse>}
   */
  public register(user: User): Observable<IApiResponse> {
    let body: string = JSON.stringify({
      username: user.username,
      password: user.password
    });

    let headers: Headers = new Headers({ "Content-Type": "application/json" });
    let options: RequestOptions = new RequestOptions({ headers: headers});

    return this.http.post(this._registerUrl, body, options)
      .map(res => <IApiResponse>res.json())
      .catch(this.handleError);
  }

  /**
   * Attempts to call the forget password call and returns an Observable that will call the onNext once and then it
   * will complete.
   *
   * @param username The user's account identifier (email address)
   * @returns {Observable<IApiResponse>}
   */
  public resetPassword(username: string): Observable<IApiResponse> {
    let body: string = JSON.stringify({
      username: username
    });

    let headers: Headers = new Headers({ "Content-Type": "application/json" });
    let options: RequestOptions = new RequestOptions({ headers: headers});

    return this.authHttp.post(this._passwordReset, body, options)
      .map(res => <IApiResponse>res.json())
      .catch(this.handleError);
  }
}


