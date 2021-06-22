import { Book } from './../model/Book';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  @Input()
  public book: Book | undefined;

  public displayFullSynopsis = false;

  constructor() {}

  ngOnInit(): void {}

  public toggleDisplayFullSynopsis(): void {
    this.displayFullSynopsis = !this.displayFullSynopsis;
  }
}
