///<reference path="../../../typings/angular-material/angular-material.d.ts"/>
module controllers {
  export class AddDialogController {

    public static $inject = ["$mdDialog"];

    constructor(private dialog:angular.material.IDialogService) {

    }

    public cancel():void {
      this.dialog.cancel();
    }

    public save():void {
      this.dialog.hide();
    }
  }
}
