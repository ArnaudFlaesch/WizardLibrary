import { CartItem } from './../model/CartItem';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item-detail',
  templateUrl: './cart-item-detail.component.html',
  styleUrls: ['./cart-item-detail.component.scss']
})
export class CartItemDetailComponent {
  @Input()
  public cartItem: CartItem | undefined;

  @Output() removeItemFromCart = new EventEmitter<string>();

  public removeFromCart(bookIsbnToRemove: string): void {
    this.removeItemFromCart.emit(bookIsbnToRemove);
  }
}
