import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Book } from './../model/Book';
import { BookService } from './../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  public bookListFromServer: Book[] = [];
  public filteredBookList: Book[] = [];

  public booksInCart: Book[] = [];
  public sidenavOpened = false;

  public searchControl: FormControl = new FormControl();
  private debounce = 400;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getListOfBooks().subscribe((response) => {
      this.bookListFromServer = response;
      this.filteredBookList = this.bookListFromServer;
    });

    this.searchControl = new FormControl('');
    this.searchControl.valueChanges
      .pipe(debounceTime(this.debounce), distinctUntilChanged())
      .subscribe((query) => {
        this.filteredBookList = this.bookListFromServer.filter((book) =>
          book.title.toLowerCase().includes(query.toLowerCase())
        );
      });
  }

  public addToCart(bookToAdd: Book): void {
    this.booksInCart = [...this.booksInCart, bookToAdd];
    this.sidenavOpened = true;
  }

  public removeBooksFromCart(isbn: string): void {
    this.booksInCart = [
      ...this.booksInCart.filter((book) => book.isbn !== isbn)
    ];
  }
}
