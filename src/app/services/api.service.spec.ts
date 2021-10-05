import { CommercialOffersResponse } from './../model/CommercialOffersResponse';
import { Book } from './../model/Book';
import { ApiService } from './api.service';
import { CommercialOffer } from '../model/CommercialOffer';
import {
  createHttpFactory,
  HttpMethod,
  SpectatorHttp
} from '@ngneat/spectator';

describe('ApiService tests', () => {
  let spectator: SpectatorHttp<ApiService>;
  const createSpectator = createHttpFactory({
    service: ApiService
  });

  beforeEach(() => (spectator = createSpectator()));

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
      spectator.service
        .getListOfBooks()
        .subscribe((books) => expect(books).toEqual(expectedBooks));

      const request = spectator.expectOne(
        spectator.service.API_BASE_URL,
        HttpMethod.GET
      );
      request.flush(expectedBooks);
    });

    it('Devrait retourner une liste de livres vide', () => {
      spectator.service
        .getListOfBooks()
        .subscribe((books) => expect(books.length).toEqual(0));
      const request = spectator.expectOne(
        spectator.service.API_BASE_URL,
        HttpMethod.GET
      );
      request.flush([]);
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

      spectator.service
        .getCommercialOffers(isbns)
        .subscribe((commercialOffers) =>
          expect(commercialOffers).toEqual(expectedCommercialOffers)
        );

      const request = spectator.expectOne(
        spectator.service.API_BASE_URL +
          isbns.join(',') +
          spectator.service.API_COMMERCIAL_OFFERS_ENDPOINT,
        HttpMethod.GET
      );

      expect(request.request.method).toEqual('GET');
      request.flush({
        offers: expectedCommercialOffers
      } as CommercialOffersResponse);
    });
  });
});
