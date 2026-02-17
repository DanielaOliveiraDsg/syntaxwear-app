import { createFileRoute, Link } from '@tanstack/react-router';
import { products } from '../../../mocks/products';
import { formatCurrency } from '../../../utils/formatCurrency';
import { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';

// DINAMIC ROUTE FOR PRODUCT DETAIL

export const Route = createFileRoute('/_app/products/$productId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { addItem } = useContext(CartContext)
  const { productId } = Route.useParams();

  const filteredProduct = products.find(
    (product) => product.id === Number(productId)
  );

  if(!filteredProduct) return;

  const originalPrice = filteredProduct?.price ?? 0;
  const discountPrice = originalPrice * 0.9;

  return (
    <section className="container mb-10 pt-44 md:pt-54 pb-10 md:px-10 text-gray-700">
      <nav className="text-sm mb-6">
        <Link to="/" className="text-[#6329A2] hover:underline">
          Home
        </Link>{' '}
        / {''}
        <Link to="/products" className="text-[#6329A2] hover:underline">
          Products
        </Link>{' '}
        / {''}
        <span className="font-semibold text-[#6329A2]">
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
          <h1 className="text-4xl font-bold text-[#6329A2] mb-2">
            {filteredProduct?.name}
          </h1>
          <p className="text-md text-gray-600 mb-4">
            Cor: <span className="font-medium">{filteredProduct?.color}</span>
          </p>

          <p className="text-gray-700  max-w-[500px] mb-4 leading-relaxed">
            {filteredProduct?.description}
          </p>

          <p className="line-through text-lg text-gray-500">
            {formatCurrency(originalPrice)}
          </p>
          <p className="text-3xl my-1 font-bold text-[#6329A2]">
            {formatCurrency(discountPrice)}
          </p>
          <p className='text-sm text-gray-500'>
            You save:
            <span className='font-semibold'>10%</span>
          </p>
          <p className='mt-3 text-sm'>
            Or 4 interest-free payments of{' '}
            <span>{formatCurrency(originalPrice / 4)}</span>
          </p>

          <div className='my-6'>
            <p className='text-sm mb-1'>Calculate Shipping Cost
            </p>
            <form className='flex gap-3'>
              <input type="text" placeholder='Type your zipcode' className='border border-gray-500 rounded-md p-2' />

              <button className='bg-[#6329A2] text-accent-light py-2 px-6 rounded-md cursor-pointer transition hover:opacity-90'>Calculate</button>
            </form>
          </div>

          <button className='bg-[#6329A2] text-accent-light w-full py-3 px-6 rounded-md cursor-pointer transition hover:opacity-90' onClick={() => addItem(filteredProduct)}>Add to Cart</button>
        </div>
      </div>
    </section>
  );
}
