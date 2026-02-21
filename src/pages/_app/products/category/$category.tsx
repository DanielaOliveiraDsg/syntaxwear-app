import { createFileRoute, Link } from '@tanstack/react-router';
import { ProductList } from '../../../../components/ProductList';
import { products } from '../../../../mocks/products';

export const Route = createFileRoute('/_app/products/category/$category')({
  component: RouteComponent,
});

function RouteComponent() {
  const { category } = Route.useParams();

  const filteredProducts = products.filter(
    (product) =>
      (product.category?.name ?? '').toLowerCase() === category.toLowerCase()
  );

  return (
    <section className="container rounded-3xl pb-10 px-2 pt-40 md:pt-44 md:px-10 m text-gray-700 bg-surface my-10 min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-center text-[#6329A2] text-3xl mb-3 p-2">
        Our Products
      </h1>
      <p className="text-center mb-10">
        Browse our exclusive collection of syntaxwear products.
      </p>
      {filteredProducts.length === 0 ? (
        <>
          <p className="text-center text-gray-500">
            No products found in this category.
          </p>
          <Link to='/products' className="text-[#6329A2] hover:underline">Back to Products</Link>
        </>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </section>
  );
}
