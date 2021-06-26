import { CartItem } from './CartItem';

export class Order {
  private _orderDate: Date;
  private _items: CartItem[];
  private _finalPrice: number;

  public constructor(orderDate: Date, items: CartItem[], finalPrice: number) {
    this._orderDate = orderDate;
    this._items = items;
    this._finalPrice = finalPrice;
  }

  public get orderDate(): Date {
    return this._orderDate;
  }

  public set orderDate(orderDate: Date) {
    this._orderDate = orderDate;
  }

  public get items(): CartItem[] {
    return this._items;
  }

  public set items(items: CartItem[]) {
    this._items = items;
  }

  public get finalPrice(): number {
    return this._finalPrice;
  }

  public set finalPrice(finalPrice: number) {
    this._finalPrice = finalPrice;
  }
}
