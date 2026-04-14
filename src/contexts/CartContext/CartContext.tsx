import { createContext } from 'react';
import type { ProductCart } from '../../interfaces/cartInterface';


interface CartContextType {
  cart: ProductCart[];
  totalAmount: number;
  addItem: (product: ProductCart) => void;
  removeItem: (productId: string, size?: string) => void;
  increment: (product: ProductCart) => void;
  decrement: (product: ProductCart) => void;
  clearCart: () => void;
}

export const CartContext = createContext({} as CartContextType);
