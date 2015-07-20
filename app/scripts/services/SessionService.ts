module services {
  export class SessionService {
    constructor(private helper:angular.jwt.IJwtHelper) {

    }

    public static getToken() : string {
      return window.localStorage.getItem('jwtToken');
    }

    public static setToken(token:string) {
      window.localStorage.setItem('jwtToken', token);
    }

    public isTokenExpired():boolean {
      return this.helper.isTokenExpired(SessionService.getToken())
    }

    /**
     * Checks if there is an non expired token available. If there is one the function returns true.
     * Otherwise it sill return false.
     * @returns {boolean} True or false depending on the availability and non expiry of the jwt token.
     */
    public isSessionActive(): boolean {
      return (SessionService.getToken() != null && !this.isTokenExpired())
    }
  }
}
