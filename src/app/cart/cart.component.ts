import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../model/Book';
import { CartItem } from '../model/CartItem';
import { getBooksGroupedByQuantity } from '../utils/book-utils';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnChanges {
  @Input() booksInCart: Book[] = [];
  @Output() removeBookFromCartEvent = new EventEmitter<string>();

  public booksGroupedByIsbn: CartItem[] = [];

  constructor(private router: Router) {}

  public ngOnChanges(changes: SimpleChanges): void {
    this.booksGroupedByIsbn = getBooksGroupedByQuantity(
      changes['booksInCart'].currentValue
    );
    localStorage.setItem('cartItems', JSON.stringify(this.booksGroupedByIsbn));
  }

  public calculateTotalPriceOfCart(): number {
    return this.booksInCart.reduce((total, book) => total + book.price, 0);
  }

  public navigateToCheckout(): void {
    this.router.navigate(['/checkout']);
  }

  public removeBookFromCart(bookIsbnToRemove: string): void {
    this.removeBookFromCartEvent.emit(bookIsbnToRemove);
  }
}
