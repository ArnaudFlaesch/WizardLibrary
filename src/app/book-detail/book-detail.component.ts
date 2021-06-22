import { Book } from './../model/Book';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {
  @Input()
  public book: Book | undefined;

  public displayFullSynopsis = false;

  public toggleDisplayFullSynopsis(): void {
    this.displayFullSynopsis = !this.displayFullSynopsis;
  }
}
