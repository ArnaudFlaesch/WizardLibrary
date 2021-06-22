import { Component } from '@angular/core';
import { Book } from '../../model/Book';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  public booksInCart: Book[] = [];
  public sidenavOpened = false;

  public addToCart(bookToAdd: Book): void {
    this.booksInCart.push(bookToAdd);
    this.sidenavOpened = true;
  }
}
