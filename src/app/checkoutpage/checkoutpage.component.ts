import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../model/Book';

@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html',
  styleUrls: ['./checkoutpage.component.scss']
})
export class CheckoutpageComponent implements OnInit {
  public booksToCheckout: Book[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('books')) {
      this.booksToCheckout = JSON.parse(
        this.route.snapshot.paramMap.get('books')!!
      );
    }
  }
}
