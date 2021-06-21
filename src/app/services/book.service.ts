import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../model/Book';
import { Observable } from 'rxjs';
@Injectable()
export class BookService {
  private API_BASE_URL = 'https://henri-potier.techx.fr/books/';
  private API_COMMERCIAL_OFFERS_ENDPOINT = 'commercialOffers';

  constructor(private http: HttpClient) {}

  public getListOfBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_BASE_URL);
  }
}
