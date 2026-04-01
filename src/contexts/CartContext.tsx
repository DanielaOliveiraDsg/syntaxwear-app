import { createContext } from 'react';
import type { ProductCart } from './CartProvider';

interface CartContextType {
  cart: ProductCart[];
  addItem: (product: ProductCart) => void;
  removeItem: (productId: string, size?: string) => void;
  increment: (product: ProductCart) => void;
  decrement: (product: ProductCart) => void;
}

export const CartContext = createContext({} as CartContextType);
