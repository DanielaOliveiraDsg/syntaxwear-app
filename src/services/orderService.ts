import type { ProductCart } from '../interfaces/cartInterface';
import type { CreateOrderData, OrderItemInput } from '../interfaces/orderInterface';

const API_BASE_URL = import.meta.env.VITE_API_URL;
console.log('Vercel is using this URL:', API_BASE_URL);

export const mapCartToOrderItems = (cart: ProductCart[]): OrderItemInput[] => {
  return cart.map((item) => ({
    productId: item.id,
    quantity: item.quantity,
    size: item.selectedSize,
  }));
};

export async function createOrder(orderData: CreateOrderData) {
  try {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      // CRITICAL: tells the browser to send the login cookie to the backend
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      // reuse parseErrorResponse logic here later
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to place order');
    }

    return await response.json();
  } catch (error) {
    console.error('Order Service Error:', error);
    throw error;
  }
}