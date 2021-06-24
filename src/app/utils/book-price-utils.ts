import {
  CommercialOffer,
  CommercialOfferType,
  SliceOffer
} from './../model/CommercialOffer';
import { Book } from '../model/Book';
import { CartItem } from '../model/CartItem';

export function getBooksGroupedByQuantity(books: Book[]): CartItem[] {
  const cartItems: CartItem[] = [];

  books.forEach((bookFromCart) => {
    const quantity = books.filter(
      (book) => book.isbn === bookFromCart.isbn
    ).length;
    const isItemAlreadyPresent = cartItems.some((cartItem) => {
      return cartItem.book.isbn === bookFromCart.isbn;
    });
    if (!isItemAlreadyPresent) {
      cartItems.push({ quantity: quantity, book: bookFromCart });
    }
  });
  return cartItems;
}

export function calculateBestPriceFromCommercialOffers(
  totalPrice: number,
  commercialOffers: CommercialOffer[]
): number {
  return Math.min(
    ...commercialOffers.map((commercialOffer) => {
      switch (commercialOffer.type) {
        case CommercialOfferType.PERCENTAGE: {
          return (totalPrice * (100 - commercialOffer.value)) / 100;
        }
        case CommercialOfferType.MINUS: {
          return totalPrice - commercialOffer.value;
        }
        case CommercialOfferType.SLICE: {
          const sliceOffer = commercialOffer as SliceOffer;
          if (totalPrice < sliceOffer.sliceValue) {
            return totalPrice;
          } else {
            return (
              totalPrice -
              Math.trunc(totalPrice / sliceOffer.sliceValue) * sliceOffer.value
            );
          }
        }
        default: {
          return totalPrice;
        }
      }
    })
  );
}
