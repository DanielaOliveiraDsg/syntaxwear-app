import { createContext } from 'react';
import type { ProductCart } from './CartProvider';
import type { Product } from '../interfaces/productInterface';

interface CartContextType {
  cart: ProductCart[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  increment: (product: ProductCart) => void;
  decrement: (product: ProductCart) => void;
}

export const CartContext = createContext({} as CartContextType);
