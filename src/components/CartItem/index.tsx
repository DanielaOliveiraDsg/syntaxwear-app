import { X, Minus, Plus } from 'lucide-react';
import { formatCurrency } from '../../utils/formatCurrency';

interface CartItemProps {
  product: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    selectedSize?: string;
    images: string[];
  };
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

export const CartItem = ({ product, onIncrement, onDecrement, onRemove }: CartItemProps) => {
  return (
    <li className="flex gap-4 py-4 border-b border-gray-200 last:border-0">
      {/* Image */}
      <div className="relative w-24 h-24 bg-gray-50 rounded-lg overflow-hidden shrink-0">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <div className="pr-4">
            <h3 className="text-sm font-bold truncate uppercase">{product.name}</h3>
            <p className="text-xs text-gray-500 mt-1">Size: {product.selectedSize ?? 'N/A'}</p>
          </div>
          <button
            onClick={onRemove}
            className="text-gray-400 hover:text-error transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex justify-between items-end mt-auto">
          {/* Quantity Controls */}
          <div className="flex items-center border border-gray-300 rounded-full px-1">
            <button
              onClick={onDecrement}
              className="p-1 hover:text-gray-500 transition-colors"
              disabled={product.quantity <= 1}
            >
              <Minus size={14} />
            </button>
            <span className="w-8 text-center text-xs font-medium">
              {product.quantity}
            </span>
            <button
              onClick={onIncrement}
              className="p-1 hover:text-gray-500 transition-colors"
            >
              <Plus size={14} />
            </button>
          </div>

          <p className="font-bold text-sm">
            {formatCurrency(product.price * product.quantity)}
          </p>
        </div>
      </div>
    </li>
  );
};