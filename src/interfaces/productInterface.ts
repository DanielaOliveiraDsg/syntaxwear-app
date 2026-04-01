import type { Category } from "./category";

export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  gender: 'MEN' | 'WOMEN' | 'UNISEX';
  price: number;
  currency: string;
  images: string[];
  sizes: string[];
  colors: string[];
  stock: number;
  active: boolean;
  categoryId: string;
  category?: Category; 
  createdAt: string;
  updatedAt: string;
}