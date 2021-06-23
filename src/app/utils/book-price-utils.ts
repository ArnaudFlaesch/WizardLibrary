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
