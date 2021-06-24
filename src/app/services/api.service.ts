import { CommercialOffersResponse } from './../model/CommercialOffersResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../model/Book';
import { CommercialOffer } from './../model/CommercialOffer';

@Injectable()
export class ApiService {
  public API_BASE_URL = 'https://henri-potier.techx.fr/books/';
  public API_COMMERCIAL_OFFERS_ENDPOINT = '/commercialOffers';

  constructor(private http: HttpClient) {}

  public getListOfBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_BASE_URL);
  }

  public getCommercialOffers(isbns: string[]): Observable<CommercialOffer[]> {
    return this.http
      .get<CommercialOffersResponse>(
        this.API_BASE_URL +
          isbns.join(',') +
          this.API_COMMERCIAL_OFFERS_ENDPOINT
      )
      .pipe(map((response) => response.offers));
  }
}
