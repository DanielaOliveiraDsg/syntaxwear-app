import { createFileRoute } from '@tanstack/react-router';
import { ProductList } from '../../../components/ProductList';
import { getProducts } from '../../../services/productService';
import { useEffect, useState } from 'react';
import type { Product } from '../../../interfaces/productInterface';

// PAGE PRODUCTS

// search params schema
type ProductSearch = {
  gender?: 'MEN' | 'WOMEN' | 'UNISEX';
  page?: number;
};

export const Route = createFileRoute('/_app/products/')({
  // Validate and provide default values for search params
  validateSearch: (search: Record<string, unknown>): ProductSearch => {
    const g = search.gender as string | undefined;
    return {
      gender: (['MEN', 'WOMEN', 'UNISEX'].includes(g?.toUpperCase() || '')
      ? (g?.toUpperCase() as 'MEN' | 'WOMEN' | 'UNISEX')
      : undefined),
      page: Number(search.page) || 1,
    };
  },
  component: RouteComponent,
  head: () => ({
    meta: [{ title: 'Products - SynstaxWear' }],
  }),
});

function RouteComponent() {
  // gender from the URL
  const { gender } = Route.useSearch();

  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);


  async function fetchProducts(targetPage: number, reset: boolean = false) {
    if (loading) return;
    setLoading(true);

    try {
      const response = await getProducts({
        page: targetPage,
        gender: gender, // This comes directly from TanStack Search Params
      });

      setProducts((prev) => (reset ? response.products : [...prev, ...response.products]));
      setHasMore(response.meta.page < response.meta.totalPages);
      setPage(targetPage + 1);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  }
  // Effect to handle initial load AND gender changes
  useEffect(() => {
    setProducts([]);
    fetchProducts(1, true);
  }, [gender]);

  const displayGender = (gender && typeof gender === 'string') ? gender.toLowerCase() : '';

  return (
    <section className="container rounded-3xl pb-10 px-2 pt-40 md:pt-44 md:px-10 m text-text-secondary bg-surface my-10">
      <h1 className="text-3xl font-semibold mb-6 text-center p-2 capitalize">
        {displayGender ? `${displayGender}'s Footwear` : 'Our Products'}
      </h1>
      <p className="text-center mb-10">
        Browse our exclusive collection of syntaxwear products.
      </p>
      {loading && products.length === 0 ? (
        <div className="flex justify-center min-h-[400px">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-500"></div>
        </div>
      ) : products.length === 0 ? (
        <p className="text-center text-surface-alt0">
          No products available for this selection.
        </p>
      ) : (
        <>
          <ProductList products={products} />
          {hasMore && (
            <button
              className="block cursor-pointer mx-auto mt-6 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => fetchProducts(page)}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Load More'}
            </button>
          )}
        </>
      )}
    </section>
  );
}
