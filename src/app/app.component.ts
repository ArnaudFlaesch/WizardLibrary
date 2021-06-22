import { Component } from '@angular/core';
import { Book } from './model/Book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WizardLibrary';

  public booksInCart: Book[] = [];
  public sidenavOpened = false;

  public addToCart(bookToAdd: Book): void {
    this.booksInCart.push(bookToAdd);
  }

  public removeFromCart(bookIsbnToRemove: string): void {
    this.booksInCart = this.booksInCart.filter(
      (bookInCart) => bookInCart.isbn !== bookIsbnToRemove
    );
  }
}
