import { CartItem } from './../model/CartItem';
import {
  CommercialOffer,
  CommercialOfferType,
  SliceOffer
} from '../model/CommercialOffer';
import { Book } from '../model/Book';

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
      cartItems.push(new CartItem(quantity, bookFromCart));
    }
  });
  return cartItems;
}

export function getTotalPriceBeforeReductions(cartItems: CartItem[]): number {
  return cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.book.price,
    0
  );
}

/**
 * Calcule le meilleur prix possible à partir d'un prix de base et d'une liste d'offres commerciales.
 * @param totalPrice Le total correspondant à la somme des prix des livres commandés.
 * @param commercialOffers La liste des offres commerciales récupérées à partir de la liste des livres.
 * @returns Le prix le plus bas parmi ceux calculés avec chaque offre commerciale.
 */
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
