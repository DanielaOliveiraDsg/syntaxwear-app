import { Link } from '@tanstack/react-router';
import { MdAddShoppingCart } from 'react-icons/md';
import type { Product } from '../../interfaces/productInterface';

interface ProductCardProps {
  product: Product;
}

// INDIVIDUAL PRODUCT CARD COMPONENT

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="rounded-2xl bg-[#fafafa] shadow-md">
      <Link to="/products">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-h-[400px] object-cover rounded-md mb-2"
        />
      </Link>

      <div className="text-gray-800 rounded-2xl p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p>{product.color}</p>

        <div className="flex justify-between mt-2.5">
          <p className="font-bold">${product.price},00</p>
          <button className="cursor-pointer">
            <MdAddShoppingCart className="h-7 w-7" />
          </button>
        </div>
      </div>
    </div>
  );
};
