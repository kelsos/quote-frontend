namespace quote.controllers {
  'use strict';
  import SessionService = quote.services.SessionService;
  import RestService = quote.services.RestService;

  export class AdminController {
    public static $inject = ['SessionService', 'RestService'];

    constructor(private session: SessionService, private api: RestService) {

    }
  }
}
