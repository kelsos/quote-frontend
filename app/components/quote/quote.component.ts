import {Component} from "angular2/core";
import {RestService} from "../../services/RestService";
import {IQuote} from "../../model/IQuote";

@Component({
  selector: "quote-data",
  templateUrl: "../..//components/quote/quote.component.html"
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
