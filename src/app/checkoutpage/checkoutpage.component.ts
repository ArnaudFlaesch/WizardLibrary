import { CartItem } from './../model/CartItem';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import {
  calculateBestPriceFromCommercialOffers,
  getTotalPriceBeforeReductions
} from '../utils/book-utils';

@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html'
})
export class CheckoutpageComponent implements OnInit {
  public booksToCheckout: CartItem[] = [];
  public resultAfterBestCommercialOffer = 0;

  constructor(private apiService: ApiService, private router: Router) {}

  public ngOnInit(): void {
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      this.booksToCheckout = JSON.parse(cartItems);

      const isbns = this.booksToCheckout.flatMap((cartItem) => {
        return Array(cartItem.quantity).fill(cartItem.book.isbn);
      });

      const totalPrice = getTotalPriceBeforeReductions(this.booksToCheckout);

      this.resultAfterBestCommercialOffer = totalPrice;

      this.apiService
        .getCommercialOffers(isbns)
        .subscribe((commercialOffers) => {
          this.resultAfterBestCommercialOffer =
            calculateBestPriceFromCommercialOffers(
              totalPrice,
              commercialOffers
            );
        });
    }
  }

  public validateOrder(): void {
    const validatedOrdersFromStorage = localStorage.getItem('validatedOrders');
    let validatedOrders = [];
    if (validatedOrdersFromStorage) {
      validatedOrders = JSON.parse(validatedOrdersFromStorage);
    }
    validatedOrders.push({
      orderDate: new Date(),
      items: this.booksToCheckout
    });
    localStorage.setItem('validatedOrders', JSON.stringify(validatedOrders));
    localStorage.setItem('cartItems', '');
    this.router.navigate(['/manageOrders']);
  }
}
