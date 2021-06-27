import { CommercialOffer } from './../model/CommercialOffer';
import { CartItem } from './../model/CartItem';
import { Book } from '../model/Book';
import {
  calculateBestPriceFromCommercialOffers,
  getBooksGroupedByQuantity,
  getTotalPriceBeforeReductions
} from './book-utils';

describe('Book utils tests', () => {
  const books = [
    {
      isbn: 'c8fabf68-8374-48fe-a7ea-a00ccd07afff',
      title: "Henri Potier à l'école des sorciers",
      price: 35
    },
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

  const expectedCartItems: CartItem[] = [
    new CartItem(2, books[0]),
    new CartItem(1, books[2])
  ];

  it('Devrait grouper les livres', () => {
    expect(getBooksGroupedByQuantity(books)).toEqual(expectedCartItems);
  });

  it('Devrait calculer le meilleur prix', () => {
    const commercialOffers: CommercialOffer[] = [
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

    const priceBeforeReduction =
      getTotalPriceBeforeReductions(expectedCartItems);

    expect(priceBeforeReduction).toEqual(100);

    expect(
      calculateBestPriceFromCommercialOffers(
        priceBeforeReduction,
        commercialOffers
      )
    ).toEqual(85);
  });
});
