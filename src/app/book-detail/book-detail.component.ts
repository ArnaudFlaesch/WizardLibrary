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

  @Input()
  public displaySynopsisBlock = true;

  public displayFullSynopsis = false;

  /**
   * Permet d'afficher soit le premier élément du tableau contenant le synopsis d'un livre,
   * soit la totalité.
   */
  public toggleDisplayFullSynopsis(): void {
    this.displayFullSynopsis = !this.displayFullSynopsis;
  }
}
