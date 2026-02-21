import { createFileRoute } from '@tanstack/react-router';
import { ProductList } from '../../../components/ProductList';
import { products } from '../../../mocks/products';

// PAGE PRODUCTS

export const Route = createFileRoute('/_app/products/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="container rounded-3xl pb-10 px-2 pt-40 md:pt-44 md:px-10 m text-gray-700 bg-surface my-10">
      <h1 className='text-center text-3xl mb-3 p-2'>Our Products</h1>
      <p className='text-center mb-10'>Browse our exclusive collection of syntaxwear products.</p>
      {products.length === 0 ? (
        <p className='text-center text-gray-500'>No products available.</p>
      ) : (
        <ProductList products={products} />
      )}
    </section>
  );
}
