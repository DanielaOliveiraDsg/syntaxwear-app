import { createFileRoute, Link } from '@tanstack/react-router';
import { ProductList } from '../../../../components/ProductList';
import { getProductsByCategoryId } from '../../../../services/productService';
import { getCategoryByName } from '../../../../services/categoryService';
import { useEffect, useState } from 'react';
import type { Product } from '../../../../interfaces/productInterface';


export const Route = createFileRoute('/_app/products/category/$category')({
  loader: async ({ params }) => {
    const category = await getCategoryByName(params.category);
    return { category };
  },
  component: RouteComponent,
  head: () => ({
    meta: [{ title: 'Products by Category - SynstaxWear' }],
  }),
  notFoundComponent: () => (
    <section className="container rounded-3xl pb-10 px-2 pt-40 md:pt-44 md:px-10 m text-text-secondary bg-surface my-10 min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-center text-primary text-3xl mb-3 p-2">
        Category Not Found
      </h1>
      <p className="text-center mb-10">
        The category you are looking for does not exist.
      </p>
      <Link to="/products" className="text-primary hover:underline">
        Back to Products
      </Link>
    </section>
  ),
});

function RouteComponent() {
  const { category} = Route.useLoaderData();
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);


  async function loadMore(isNewCategory = false) {
    if (loading || (!hasMore && !isNewCategory)) return;

    setLoading(true);

    try {
      const currentPage = isNewCategory ? 1 : page;
      const filteredProducts = await getProductsByCategoryId(category.id, { page: currentPage });

      if (isNewCategory) {
        setProducts(filteredProducts.products);
        setPage(2);
      } else {
        setProducts((prev) => [...prev, ...filteredProducts.products]);
        setPage((prev) => prev + 1);
      }


      // If the API returns an empty array, it means there are no more products to load
      if (filteredProducts.products.length < 1) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    } catch (error) {
      console.error('Error loading products:', error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    // Reset state for the new category
    setProducts([]);
    setPage(1);
    setHasMore(true);

    // Trigger the fresh load
    loadMore(true);
  }, [category.id]); //ensures it runs every time the category changes

  return (
    <section className="container rounded-3xl pb-10 px-2 pt-40 md:pt-44 md:px-10 m text-text-secondary bg-surface my-10 min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-center text-primary text-3xl mb-3 p-2">
        Our Products
      </h1>
      <p className="text-center mb-10">
        Browse our exclusive collection of syntaxwear products.
      </p>
      {loading && products.length === 0 ? (
        <div className="flex justify-center min-h-[400px">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-500"></div>
        </div>
      ) : products.length === 0 ? (
        <>
          <p className="text-center text-surface-alt0">
            No products found in this category.
          </p>
          <Link to="/products" className="text-primary hover:underline">
            Back to Products
          </Link>
        </>
      ) : (
        <>
          <ProductList products={products} />
          {hasMore && (
            <button
              className="block cursor-pointer mx-auto mt-6 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() =>loadMore(false)}
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
