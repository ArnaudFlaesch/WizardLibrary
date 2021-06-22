import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../model/Book';

@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html'
})
export class CheckoutpageComponent implements OnInit {
  public booksToCheckout: Book[] = [];

  constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    const bookFromParams = this.route.snapshot.paramMap.get('books');
    if (bookFromParams) {
      this.booksToCheckout = JSON.parse(bookFromParams);
    }
  }
}
