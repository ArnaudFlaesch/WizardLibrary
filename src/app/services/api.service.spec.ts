import { CommercialOffersResponse } from './../model/CommercialOffersResponse';
import { Book } from './../model/Book';
import { ApiService } from './api.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { CommercialOffer } from '../model/CommercialOffer';

describe('ApiService tests', () => {
  let httpTestingController: HttpTestingController;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    apiService = TestBed.inject(ApiService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('Tests sur la liste des livres', () => {
    const expectedBooks: Book[] = [
      {
        isbn: 'c8fabf68-8374-48fe-a7ea-a00ccd07afff',
        title: "Henri Potier à l'école des sorciers",
        price: 35
      },
      {
        isbn: 'a460afed-e5e7-4e39-a39d-c885c05db861',
        title: 'Henri Potier et la Chambre des secrets',
        price: 30
      }
    ] as Book[];

    it('Devrait retourner deux livres', () => {
      apiService
        .getListOfBooks()
        .subscribe((books) => expect(books).toEqual(expectedBooks), fail);

      const request = httpTestingController.expectOne(apiService.API_BASE_URL);
      expect(request.request.method).toEqual('GET');

      request.flush(expectedBooks);
    });

    it('Devrait retourner une liste de livres vide', () => {
      apiService
        .getListOfBooks()
        .subscribe((books) => expect(books.length).toEqual(0), fail);

      const req = httpTestingController.expectOne(apiService.API_BASE_URL);
      req.flush([]);
    });
  });

  describe('Test sur la liste des offres commerciales', () => {
    const expectedCommercialOffers: CommercialOffer[] = [
      {
        type: 'percentage',
        value: 5
      },
      {
        type: 'minus',
        value: 15
      },
      {
        type: 'slice',
        sliceValue: 100,
        value: 12
      }
    ];

    it('Devrait retourner trois offres', () => {
      const isbns = ['585858', '454545'];
      apiService
        .getCommercialOffers(isbns)
        .subscribe(
          (commercialOffers) =>
            expect(commercialOffers).toEqual(expectedCommercialOffers),
          fail
        );

      const request = httpTestingController.expectOne(
        apiService.API_BASE_URL +
          isbns.join(',') +
          apiService.API_COMMERCIAL_OFFERS_ENDPOINT
      );

      expect(request.request.method).toEqual('GET');
      request.flush({
        offers: expectedCommercialOffers
      } as CommercialOffersResponse);
    });
  });
});
