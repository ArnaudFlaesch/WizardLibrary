import { CartItem } from './CartItem';
export interface Order {
  orderDate: Date;
  items: CartItem[];
  finalPrice: number;
}
