import type { Category } from "./category";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  colors: string[];
  stock: number;
  sizes: string[];
  images: string[];
  categoryId: string;
  active: boolean;
  slug: string;
  category?: Category;
}