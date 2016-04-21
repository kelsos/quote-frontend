import {Component} from "angular2/core";
import {RestService} from "../../services/RestService";
import {IQuote} from "../../model/IQuote";
import {PAGINATION_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import {IPage} from "../../model/IPage";
import {IPageChangedEvent} from "ng2-bootstrap/components/pagination/pagination.component";

@Component({
  selector: "quote-data",
  templateUrl: "app/components/quote/quote.component.html",
  providers: [RestService],
  directives: [PAGINATION_DIRECTIVES]
})

export class QuoteComponent {
  public quotes: IQuote[];
  public currentPage: number;
  public total: number;
  protected maxSize: number;

  constructor(private restService: RestService) {
    this.load();
    this.maxSize = 5;
  }

  public load(offset: number = 0, limit: number = 10): void {
    this.restService.loadQuotes(offset, limit).subscribe((page: IPage<IQuote[]>) => {
      this.quotes = page.data;
      this.total = page.total;
    });
  }

  protected pageChanged(event: IPageChangedEvent): void {
    this.load(event.page * 10);
  }
}
