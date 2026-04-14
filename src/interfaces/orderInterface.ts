export interface OrderItemInput {
  productId: string;
  quantity: number;
  size?: string;
}

export interface ShippingAddress {
  zipcode: string;
  street: string;
  number: string;
  complement?: string;
  city: string;
  state: string;
  country: string;
}

export interface CreateOrderData {
  items: OrderItemInput[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
}