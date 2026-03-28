import type { Category } from "./category";

export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  price: number; // Note: will handle the Decimal -> Number conversion
  currency: string;
  images: string[];
  sizes: string[]; // Standardized for footwear
  colors: string[];
  stock: number;
  active: boolean;
  categoryId: string;
  category?: Category; // when including the relation in the query
  createdAt: string;
  updatedAt: string;
}