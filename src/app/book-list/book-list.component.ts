import { Book } from './../model/Book';
import { BookService } from './../services/book.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  public bookList: Book[] = [];

  @Output() private addToCart = new EventEmitter<Book>();

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getListOfBooks().subscribe((response) => {
      this.bookList = response;
    });
  }

  public addToCartEvent(book: Book): void {
    this.addToCart.emit(book);
  }
}
