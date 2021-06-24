import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from '../model/CartItem';
import { ApiService } from '../services/api.service';
import { calculateBestPriceFromCommercialOffers } from '../utils/book-price-utils';

@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html'
})
export class CheckoutpageComponent implements OnInit {
  public booksToCheckout: CartItem[] = [];
  public resultAfterBestCommercialOffer = 0;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  public ngOnInit(): void {
    const bookFromParams = this.route.snapshot.paramMap.get('books');
    if (bookFromParams) {
      this.booksToCheckout = JSON.parse(bookFromParams);

      const isbns = this.booksToCheckout.flatMap((cartItem) => {
        return Array(cartItem.quantity).fill(cartItem.book.isbn);
      });

      const totalPrice = this.getTotalPrice();

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

  public getTotalPrice(): number {
    return this.booksToCheckout.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.book.price,
      0
    );
  }
}
