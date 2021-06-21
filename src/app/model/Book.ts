export class Book {
  private _isbn = '';
  private _title = '';
  private _price = 0;
  private _cover = '';
  private _synopsis: string[] = [];

  public get isbn(): string {
    return this._isbn;
  }

  public set isbn(isbn: string) {
    this._isbn = isbn;
  }

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  public get price(): number {
    return this._price;
  }

  public set price(price: number) {
    this._price = price;
  }

  public get cover(): string {
    return this._cover;
  }

  public set cover(cover: string) {
    this._cover = cover;
  }

  public get synopsis(): string[] {
    return this._synopsis;
  }

  public set synopsis(synopsis: string[]) {
    this._synopsis = synopsis;
  }
}
