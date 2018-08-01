
import { Component } from "@angular/core";
import { RestService } from '../../services/rest.service';
import { IQuote } from '../../model/IQuote';
import { IPage } from '../../model/IPage';

@Component({
  selector: 'app-quotes',
  templateUrl: 'app/components/quote/quote.component.html',
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
