import { CartItem } from '../../model/CartItem';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Book } from '../../model/Book';
import { ApiService } from '../../services/api.service';
import { plainToClass } from 'class-transformer';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list-page.component.html',
  styleUrls: ['./book-list-page.component.scss']
})
export class BookListPageComponent implements OnInit {
  public bookListFromServer: Book[] = [];
  public filteredBookList: Book[] = [];

  public booksInCart: Book[] = [];
  public sidenavOpened = false;

  public searchControl: FormControl = new FormControl('');
  private debounce = 400;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    const booksInCart = localStorage.getItem('cartItems');
    if (booksInCart) {
      this.booksInCart = plainToClass(CartItem, JSON.parse(booksInCart)).map(
        (cartItem: CartItem) => cartItem.book
      );
    }

    this.apiService.getListOfBooks().subscribe((response) => {
      this.bookListFromServer = response;
      this.filteredBookList = this.bookListFromServer;
    });

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
