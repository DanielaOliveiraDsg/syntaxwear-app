import { useState } from 'react';
import type { Product } from '../interfaces/productInterface';
import { CartContext } from './CartContext';

interface CartProviderProps {
  children: React.ReactNode;
}

export interface ProductCart extends Product {
  quantity: number;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<ProductCart[]>([]);

  // ---- add product ----
  function addItem(product: Product): void {
    const productExistsInCart = cart.find(
      (itemInCart) => itemInCart.id === product.id
    );

    let newCart;

    if (productExistsInCart) {
      newCart = cart.map((itemInCart) =>
        itemInCart.id === product.id
          ? { ...itemInCart, quantity: itemInCart.quantity + 1 }
          : itemInCart
      );
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(newCart);
  }

  // ---- remove product ----
  function removeItem(productId: number): void {
    const newCart = cart.filter((itemInCart) => itemInCart.id !== productId);

    setCart(newCart);
  }

  // ---- increment product quantity ----
  function increment(product: ProductCart) {
    updateItemQuantity(product, product.quantity + 1);
  }

  // ---- decrement product quantity ----
  function decrement(product: ProductCart) {
    updateItemQuantity(product, product.quantity - 1);
  }

  function updateItemQuantity(product: ProductCart, newQuantity: number): void {
    if (newQuantity <= 0) return;
    const productExistsInCart = cart.find(
      (itemInCart) => itemInCart.id === product.id
    );

    if (!productExistsInCart) return;

    const newCart = cart.map((itemInCart) =>
      itemInCart.id === product.id
      ? {...itemInCart, quantity: newQuantity}
      : itemInCart
    )

    setCart(newCart)

  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        increment,
        decrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
