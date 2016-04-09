'use strict';

namespace quote.controllers {
  import IDialogService = angular.material.IDialogService;

  export class AddDialogController {

    public static $inject = ["$mdDialog"];

    constructor(private dialog: IDialogService) {

    }

    public cancel():void {
      this.dialog.cancel();
    }

    public save():void {
      this.dialog.hide();
    }
  }
}
