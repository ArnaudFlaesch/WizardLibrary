import { CartItem } from '../model/CartItem';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import {
  calculateBestPriceFromCommercialOffers,
  getTotalPriceBeforeReductions
} from '../utils/book-utils';
import { Order } from '../model/Order';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html'
})
export class CheckoutpageComponent implements OnInit {
  public booksToCheckout: CartItem[] = [];
  public priceBeforeCommercialOffer = 0;
  public priceAfterBestCommercialOffer = 0;
  public commercialOffersRequestCompleted = false;

  constructor(private apiService: ApiService, private router: Router) {}

  public ngOnInit(): void {
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      this.booksToCheckout = JSON.parse(cartItems);
      if (this.booksToCheckout.length > 0) {
        const isbns = this.booksToCheckout.flatMap((cartItem) => {
          return Array(cartItem.quantity).fill(cartItem.book.isbn);
        });

        this.priceBeforeCommercialOffer = getTotalPriceBeforeReductions(
          this.booksToCheckout
        );

        this.priceAfterBestCommercialOffer = this.priceBeforeCommercialOffer;

        this.apiService
          .getCommercialOffers(isbns)
          .subscribe((commercialOffers) => {
            this.priceAfterBestCommercialOffer =
              calculateBestPriceFromCommercialOffers(
                this.priceBeforeCommercialOffer,
                commercialOffers
              );
            this.commercialOffersRequestCompleted = true;
          });
      }
    }
  }

  public validateOrder(): void {
    const validatedOrdersFromStorage = localStorage.getItem('validatedOrders');
    let validatedOrders = [];
    if (validatedOrdersFromStorage) {
      validatedOrders = JSON.parse(validatedOrdersFromStorage);
    }
    validatedOrders.push(
      new Order(
        new Date(),
        this.booksToCheckout,
        this.priceAfterBestCommercialOffer
      )
    );
    localStorage.setItem('validatedOrders', JSON.stringify(validatedOrders));
    localStorage.setItem('cartItems', '');
    this.router.navigate(['/manageOrders']);
  }

  public removeItemFromCart(itemIndex: number): void {
    this.booksToCheckout = this.booksToCheckout.filter(
      (cartItem, index) => index !== itemIndex
    );
    localStorage.setItem('cartItems', JSON.stringify(this.booksToCheckout));
  }
}
