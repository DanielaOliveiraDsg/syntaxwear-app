import { CartContext } from '../../contexts/CartContext/CartContext';
import { useContext } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { CartItem } from '../CartItem';
import { formatCurrency } from '../../utils/formatCurrency';
import { CheckoutButton } from '../CheckoutButton';

interface cartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: cartDrawerProps) => {
  const { cart, removeItem, increment, decrement, totalAmount } =
    useContext(CartContext);
  const navigate = useNavigate();

  // 1. Calculate the total quantity of all items combined
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const isCartEmpty = cart.length === 0;

  return (
    <>
      {/* Overlay */}
      <div
        className={`${isOpen ? 'bg-black/70 visible' : 'bg-transparent invisible'} fixed inset-0 z-50 transition-all duration-600 ease-in-out`}
        onClick={onClose}
      >
        {/* drawer */}
        <div
          className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 bottom-0 bg-background text-primary pt-6 shadow-xl transition-all duration-500 ease-in-out w-full max-w-md z-60`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <header className="flex items-center justify-between px-4 py-6 border-b">
              <h2 className="text-2xl font-bold uppercase tracking-tight">
                Shopping Cart ({totalQuantity})
              </h2>
              <button
                className="text-xl cursor-pointer hover:opacity-70 transition-opacity"
                onClick={() => onClose()}
              >
                X
              </button>
            </header>

            <ul className="p-4 flex-1 overflow-y-auto scrollbar-hide h-[calc(100%-140px)]">
              {isCartEmpty ? (
                <p className="text-center mt-10 text-gray-500">
                  Your cart is empty.
                </p>
              ) : (
                cart.map((product) => (
                  <CartItem
                    key={`${product.id}-${product.selectedSize}`}
                    product={product}
                    onIncrement={() => increment(product)}
                    onDecrement={() => decrement(product)}
                    onRemove={() =>
                      removeItem(product.id, product.selectedSize)
                    }
                  />
                ))
              )}
            </ul>

            <footer className="p-6">
              {!isCartEmpty && (
                <div className="flex justify-between border-t items-center mb-1 py-4">
                  <span className="text-gray-500 font-medium">Subtotal</span>
                  <span className="text-black font-bold">
                    {formatCurrency(totalAmount)}
                  </span>
                </div>
              )}
              <CheckoutButton
                isCartEmpty={isCartEmpty}
                itemCount={totalQuantity}
                emptyText='Add a product'
                disableIfEmpty={true}
                onClick={() => {
                  onClose();
                  navigate({ to: '/order/checkout' });
                }}
              />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};
