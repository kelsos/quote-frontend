import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IApiResponse, ILoginResponse } from '../model/ILoginResponse';
import { IPage } from '../model/IPage';
import { IQuote } from '../model/IQuote';
import { IUser } from '../model/IUser';
import { User } from '../model/User';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class RestService {


    private API_URL = 'http://api.quote.dev';
    private _usersUrl = `${this.API_URL}/admin/users`;
    private _quotesUrl = `${this.API_URL}/quote`;
    private _loginUrl = `${this.API_URL}/login`;
    private _registerUrl = `${this.API_URL}/register`;
    private _passwordReset = `${this.API_URL}/forgot`;

    constructor(private http: HttpClient) {
    }

    /**
     *
     * Does a remote request to the quote-backend and returns a Promise to a collection of
     * {@link IUser} items
     *
     * @returns {Observable<IUser[]>}
     */
    public loadUsers(): Observable<IUser[]> {
        return this.http.get(this._usersUrl).pipe(
            map(res => <IUser[]> res.json().data),
            catchError(err => this.handleError(err))
        );
    }

    /**
     * Does a remote request to the quote-backend api and returns a Promise to a collection of
     * {@link IQuote} items;
     *
     * @returns {Observable<IPage<IQuote[]>>}
     */
    public loadQuotes(offset: number = 0, limit: number = 10): Observable<IPage<IQuote[]>> {
        const params: URLSearchParams = new URLSearchParams();
        params.append('limit', String(limit));
        params.append('offset', String(offset));

        return this.http.get(this._quotesUrl, {
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
        const body: string = JSON.stringify({
            username: user.username,
            password: user.password
        });


        return this.http.post(this._loginUrl, body, httpOptions)
            .map(res => <ILoginResponse>res.json())
            .do((next: ILoginResponse) => {
                localStorage.setItem('id_token', next.token);
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
        const body = {
            username: user.username,
            password: user.password
        };

        return this.http.post(this._registerUrl, body, httpOptions)
            .pipe(
                map(res => res.json()),
                catchError(err => this.handleError(err))
            );
    }

    /**
     * Attempts to call the forget password call and returns an Observable that will call the onNext once and then it
     * will complete.
     *
     * @param username The user's account identifier (email address)
     * @returns {Observable<IApiResponse>}
     */
    public resetPassword(username: string): Observable<IApiResponse> {
        const body = {
            username: username
        };

        return this.http.post(this._passwordReset, body, httpOptions)
            .pipe(
                map(res => res.json()),
                catchError(err => this.handleError(err))
            );
    }

    protected handleError(error: Response): Observable<never> {
        console.log(error);
        return throwError(error.json().error || 'Server Error');
    }
}


