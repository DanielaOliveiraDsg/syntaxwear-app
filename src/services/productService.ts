// API call related to products

import type { Product } from '../interfaces/productInterface';

const API_BASE_URL = 'http://localhost:3000';
const DEFAULT_LIMIT = 3;

interface GetProductParams {
  page: number;
  limit?: number;
  gender?: 'MEN' | 'WOMEN' | 'UNISEX';
  categoryId?: string;
}

interface ProductResponse {
  products: Product[];
  meta: { // Matching backend "meta" object structure
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

// Fetch products with pagination
export async function getProducts({
  page,
  limit = DEFAULT_LIMIT,
  gender,
  categoryId
}: GetProductParams): Promise<ProductResponse> {

  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  if (gender) params.append('gender', gender);
  if (categoryId) params.append('categoryId', categoryId);

  const url = `${API_BASE_URL}/products?${params.toString()}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.statusText}`);
    }
    return await response.json();

  } catch (error) {
    throw error instanceof Error ? error : new Error('An unknown error occurred');
  }

}

// Category helper (it can now just call getProducts)
export async function getProductsByCategoryId(categoryId: string,
  paginationParams: { page: number; limit?: number }
): Promise<ProductResponse> {
  return getProducts({
    ...paginationParams,
    categoryId
  });
}

// Fetch a single product by ID
export async function getProductById(id: string): Promise<Product> {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error(`Product not found: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    throw error instanceof Error ? error : new Error('An unknown error occurred');
  }
}