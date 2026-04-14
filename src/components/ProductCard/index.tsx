import { Link } from '@tanstack/react-router';
import type { Product } from '../../interfaces/productInterface';
import { formatCurrency } from '../../utils/formatCurrency';

interface ProductCardProps {
  product: Product;
}

// INDIVIDUAL PRODUCT CARD COMPONENT

export const ProductCard = ({ product }: ProductCardProps) => {

  return (
    <div className="rounded-2xl bg-surface shadow-md">
      <Link
        to="/products/$productId"
        params={{ productId: String(product.id) }}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full max-h-[400px] object-cover rounded-md mb-2"
        />
      </Link>

      <div className="text-text-secondary rounded-2xl p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p>{product.colors[0]}</p>

        <div className="flex justify-between mt-2.5">
          <p className="font-bold">{formatCurrency(product.price)}</p>
          <Link
            to="/products/$productId"
            params={{ productId: String(product.id) }}
            className="flex items-center gap-2 border border-gray-500 text-text-secondary px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wide hover:scale-103 transition-all active:scale-95"
          >
            Select Size
          </Link>
        </div>
      </div>
    </div>
  );
};
