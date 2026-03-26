// API call related to products

import type { Product } from '../interfaces/productInterface';

const API_BASE_URL = 'http://localhost:3000';
const DEFAULT_LIMIT = 3;

interface GetProductParams {
  page: number;
  limit?: number;
}

interface ProductResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
}
export async function getProducts({ page, limit = DEFAULT_LIMIT }: GetProductParams): Promise<ProductResponse> {

  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });
  const url = `${API_BASE_URL}/products?${params.toString()}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.statusText}`);
    }
    const data = await response.json();
    return data;

  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error('An unknown error occurred while fetching products.');
  }

}