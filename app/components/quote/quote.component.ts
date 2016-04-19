import {Component} from "angular2/core";
import {RestService} from "../../services/RestService";
import {IQuote} from "../../model/IQuote";

@Component({
  selector: "quote-data",
  templateUrl: "app/components/quote/quote.component.html",
  providers: [RestService]
})

export class QuoteComponent {
  public quotes: IQuote[];

  constructor(private restService: RestService) {
    this.load();
  }

  public load(): void {
    this.restService.loadQuotes().subscribe((quotes: IQuote[]) => {
      this.quotes = quotes;
    });
  }
}
