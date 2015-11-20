namespace quote.services {
  export class SessionService {
    public static $inject = ['jwtHelper'];

    constructor(private helper:angular.jwt.IJwtHelper) {

    }

    public getToken():string {
      return window.localStorage.getItem('jwtToken');
    }

    public setToken(token:string) {
      window.localStorage.setItem('jwtToken', token);
    }

    public isTokenExpired():boolean {
      return this.helper.isTokenExpired(this.getToken());
    }

    /**
     * Clears the jwtToken stored.
     */
    public clearSessionToken():void {
      window.localStorage.removeItem("jwtToken");
    }

    /**
     * Checks if there is an non expired token available. If there is one the function returns true.
     * Otherwise it sill return false.
     * @returns {boolean} True or false depending on the availability and non expiry of the jwt token.
     */
    public isSessionActive():boolean {
      return (this.getToken() != null && !this.isTokenExpired());
    }


  }
}
