namespace quote.controllers {
  'use strict';
  export class AdminController {
    public static $inject = ['SessionService', 'RestService'];

    constructor(private session:quote.services.SessionService, private api:quote.services.RestService) {

    }
  }
}
