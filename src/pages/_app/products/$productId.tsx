import { createFileRoute, Link } from '@tanstack/react-router';
import { products } from '../../../mocks/products';
import { formatCurrency } from '../../../utils/formatCurrency';
import { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import { ZipCodeForm } from '../../../components/ZipCodeForm';

// DINAMIC ROUTE FOR PRODUCT DETAIL

export const Route = createFileRoute('/_app/products/$productId')({
  component: RouteComponent,
  head: ({ params }) => {
    const filteredProduct = products.find(
      (product) => product.id === Number(params.productId)
    );

    const title = filteredProduct
      ? `${filteredProduct.name} - SynstaxWear`
      : 'Product not found - SynstaxWear';

    return {
      meta: [{ title }],
    };
  },
});

function RouteComponent() {
  const { addItem } = useContext(CartContext);
  const { productId } = Route.useParams();

  const filteredProduct = products.find(
    (product) => product.id === Number(productId)
  );

  if (!filteredProduct)
    return (
      <section className="container mb-10 pt-44 md:pt-54 pb-10 md:px-10 text-text-secondary text-center min-h-[80vh] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-primary mb-4">
          Product not found
        </h1>
        <p className="text-gray-600 mb-6">
          Sorry, the product you are looking for does not exist.
        </p>
        <Link to="/products" className="text-primary hover:underline">
          Back to Products
        </Link>
      </section>
    );

  const originalPrice = filteredProduct?.price ?? 0;
  const discountPrice = originalPrice * 0.9;

  return (
    <section className="container mb-10 pt-44 md:pt-54 pb-10 md:px-10 text-text-secondary">
      <nav className="text-sm mb-6">
        <Link to="/" className="text-primary hover:underline">
          Home
        </Link>{' '}
        / {''}
        <Link to="/products" className="text-primary hover:underline">
          Products
        </Link>{' '}
        / {''}
        <span className="font-semibold text-primary">
          {filteredProduct?.name}
        </span>
      </nav>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img
            src={filteredProduct?.image}
            alt={filteredProduct?.name}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-primary mb-2">
            {filteredProduct?.name}
          </h1>
          <p className="text-md text-gray-600 mb-4">
            Cor: <span className="font-medium">{filteredProduct?.color}</span>
          </p>

          <p className="text-text-secondary  max-w-[500px] mb-4 leading-relaxed">
            {filteredProduct?.description}
          </p>

          <p className="line-through text-lg text-surface-alt0">
            {formatCurrency(originalPrice)}
          </p>
          <p className="text-3xl my-1 font-bold text-primary">
            {formatCurrency(discountPrice)}
          </p>
          <p className="text-sm text-surface-alt0">
            You save:
            <span className="font-semibold">10%</span>
          </p>
          <p className="mt-3 text-sm">
            Or 4 interest-free payments of{' '}
            <span>{formatCurrency(originalPrice / 4)}</span>
          </p>

          <div className="my-6">
            <p className="text-sm mb-1">Calculate Shipping Cost</p>
            <ZipCodeForm />
          </div>

          <button
            className="bg-primary text-accent-light w-full py-3 px-6 rounded-md cursor-pointer transition hover:opacity-90"
            onClick={() => addItem(filteredProduct)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
