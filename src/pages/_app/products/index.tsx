import { createFileRoute } from '@tanstack/react-router';
import { ProductList } from '../../../components/ProductList';
import { getProducts } from '../../../services/productService';
import { useEffect, useRef, useState } from 'react';
import type { Product } from '../../../interfaces/productInterface';

// PAGE PRODUCTS

export const Route = createFileRoute('/_app/products/')({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: 'Products - SynstaxWear' }],
  }),
});

function RouteComponent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const hasFetchedInitial = useRef(false); // to avoid rerendering on initial load

  async function loadMore() {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const response = await getProducts({ page });

      setProducts((prev) => [...prev, ...response.products]);
      // If the API returns an empty array, it means there are no more products to load
      if (response.products.length < 1) {
        setHasMore(false);
      } else {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error('Error loading products:', error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (hasFetchedInitial.current) return;
    hasFetchedInitial.current = true;
    loadMore();
  }, []);

  return (
    <section className="container rounded-3xl pb-10 px-2 pt-40 md:pt-44 md:px-10 m text-text-secondary bg-surface my-10">
      <h1 className="text-center text-3xl mb-3 p-2">Our Products</h1>
      <p className="text-center mb-10">
        Browse our exclusive collection of syntaxwear products.
      </p>
      {loading && products.length === 0 ? (
        <div className="flex justify-center min-h-[400px">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-500"></div>
        </div>
      ) : products.length === 0 ? (
        <p className="text-center text-surface-alt0">No products available.</p>
      ) : (
        <>
          <ProductList products={products} />
          {hasMore && (
            <button
              className="block cursor-pointer mx-auto mt-6 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={loadMore}
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
