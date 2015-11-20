namespace quote.controllers {
  import Quote = quote.model.Quote;
  import RestService = quote.services.RestService;

  export class QuoteController {

    public quotes:Quote[];

    public static $inject = ['RestService'];

    constructor(private restService:RestService) {
      this.load();
    }

    public load():void {
      this.restService.loadQuotes().subscribe((quotes:Quote[]) => {
        this.quotes = quotes;
      })
    }

    public openDialog():void {

    }
  }
}
