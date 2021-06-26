import { Book } from './Book';

export class CartItem {
  private _quantity: number;
  private _book: Book;

  constructor(quantity: number, book: Book) {
    this._quantity = quantity;
    this._book = book;
  }

  public get quantity(): number {
    return this._quantity;
  }

  public set quantity(quantity: number) {
    this._quantity = quantity;
  }

  public get book(): Book {
    return this._book;
  }

  public set book(book: Book) {
    this._book = book;
  }
}
