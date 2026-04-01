import { createFileRoute, Link } from '@tanstack/react-router';
import { getProductById } from '../../../services/productService'; // service api call
import { formatCurrency } from '../../../utils/formatCurrency';
import { useContext, useState } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import { ZipCodeForm } from '../../../components/ZipCodeForm';
import { ProductCarousel } from '../../../components/ProductCarousel';

// DYNAMIC ROUTE FOR PRODUCT DETAIL

export const Route = createFileRoute('/_app/products/$productId')({
  // fetch data before rendering - TanStack Router loader
  loader: ({ params }) => getProductById(params.productId),
  component: RouteComponent,
  head: ({ loaderData }) => {
    const title = loaderData
      ? `${loaderData.name} - SynstaxWear`
      : 'Product - SynstaxWear';
    return { meta: [{ title }] };
  },
  errorComponent: () => (
    <section className="container mb-10 pt-44 pb-10 text-center min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-primary mb-4">
        Product not found
      </h1>
      <Link to="/products" className="text-primary hover:underline">
        Back to Products
      </Link>
    </section>
  ),
});

function RouteComponent() {
  const { addItem } = useContext(CartContext);
  // data loaded by the route
  const product = Route.useLoaderData();

  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const originalPrice = Number(product.price);
  const discountPrice = originalPrice * 0.9;

  console.log('Current Product:', product);

  return (
    <section className="container mb-10 pt-44 md:pt-54 pb-10 md:px-10 text-text-secondary">
      <nav className="text-sm mb-6">
        <Link to="/" className="text-primary hover:underline">
          Home
        </Link>{' '}
        /
        <Link to="/products" className="text-primary hover:underline ml-1">
          Products
        </Link>{' '}
        /<span className="font-semibold text-primary ml-1">{product.name}</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <ProductCarousel images={product.images} alt={product.name} />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-primary mb-2">
            {product.name}
          </h1>

          <p className="text-md text-gray-600 mb-4">
            Category:{' '}
            <span className="font-medium">{product.category?.name}</span>
          </p>

          <p className="text-md text-gray-600 mb-4">
            Color: <span className="font-medium">{product.colors}</span>
          </p>

          <p className="text-md text-gray-600 mb-4">
            Gender:{' '}
            <span className="font-medium capitalize">
              {product.gender?.toLowerCase() || ''}
            </span>
          </p>

          <div className="mb-6">
            <p className="text-sm font-semibold mb-2 text-primary">
              Select Size
            </p>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((size) => {
                // Check if this specific size is the one in state
                const isSelected = selectedSize === size;

                return (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                    h-12 min-w-14 px-3 flex items-center justify-center
                    rounded-md border transition-all cursor-pointer text-sm font-medium

                    /* Dynamic coloring based on selection */
                    ${
                      isSelected
                        ? 'bg-primary text-white border-primary'
                        : 'border-surface-alt0 text-text-secondary hover:bg-primary hover:text-white hover:border-primary'
                    }
                  `}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="text-text-secondary  max-w-[500px] mb-4 leading-relaxed">
            {product.description}
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

          <div className="my-6 flex flex-col gap-4">
            <ZipCodeForm />

            <button
              className={`w-full py-3 px-6 rounded-md transition font-semibold ${
                selectedSize
                  ? 'bg-primary text-accent-light cursor-pointer hover:opacity-90'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              onClick={() => {
                if (selectedSize) {
                  const itemToAdd = { ...product, selectedSize, quantity: 1 };
                  addItem(itemToAdd);
                }}
              }
              disabled={!selectedSize}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
