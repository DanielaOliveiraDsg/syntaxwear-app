import { notFound } from "@tanstack/react-router";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function getCategoryByName(name: string) {
  const params = new URLSearchParams({ page: '1', limit: '1', search: name });
  const response = await fetch(`${API_BASE_URL}/categories?${params.toString()}`);

  if (!response.ok) {
    throw notFound();
  }

  const result = await response.json();

  if (!result.categories || result.categories.length === 0) {
    throw notFound();
  }

  return result.categories[0];
}