import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../model/Book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  @Input() booksInCart: Book[] = [];

  constructor(private router: Router) {}

  public removeFromCart(bookIsbnToRemove: string): void {
    this.booksInCart = this.booksInCart.filter(
      (bookInCart) => bookInCart.isbn !== bookIsbnToRemove
    );
  }

  public getTotal(): number {
    return this.booksInCart.reduce((total, book) => total + book.price, 0);
  }

  public navigateToCheckout(): void {
    this.router.navigate([
      '/checkout',
      { books: JSON.stringify(this.booksInCart) }
    ]);
  }
}
