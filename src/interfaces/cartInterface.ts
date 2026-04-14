import type { Product } from "./productInterface";

export interface ProductCart extends Product {
  quantity: number;
  selectedSize?: string; // optional property for selected size
}