import { formatCurrency } from '../../utils/formatCurrency';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';

interface cartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: cartDrawerProps) => {
  const { cart, removeItem, increment, decrement } = useContext(CartContext);

  // 1. Calculate the total quantity of all items combined
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  // if (!isOpen) {
  //   return null;
  // }

  return (
    <>
      {/* Overlay */}
      <div
        className={`${isOpen ? 'bg-black/70 visible' : 'bg-transparent invisible'} fixed inset-0 z-50 transition-all duration-500 ease-in-out`}
        onClick={onClose}
      >
        {/* drawer */}
        <div
          className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} absolute top-0 right-0 bottom-0 bg-background text-primary pt-6 shadow-xl transition-all duration-500 ease-in-out w-80 md:w-106`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <header className="flex items-center justify-between px-5">
              <h2 className="text-2xl font-bold">
                Shopping Cart ({totalQuantity})
              </h2>
              <button
                className="text-xl cursor-pointer hover:opacity-70"
                onClick={() => onClose()}
              >
                X
              </button>
            </header>

            {/* Mock products, later will be done with Backend */}
            <ul className="p-4 flex-1 overflow-y-auto scrollbar-hide h-[calc(100%-140px)]">
              {cart.length === 0 ? (
                <p className="text-center mt-10 text-gray-500">
                  Your cart is empty.
                </p>
              ) : (
                cart.map((product) => (
                  <li
                    key={product.id}
                    className="flex flex-col gap-2 px-4 py-6 border-b"
                  >
                    <button
                      className="self-end text-gray-400 hover:text-error transition-colors"
                      onClick={() => removeItem(product.id)}
                    >
                      X
                    </button>

                    <div className="flex items-center gap-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <p className="font-medium">{product.name}</p>
                        <p className="text-primary font-bold">
                          {formatCurrency(product.price)}
                        </p>

                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center border rounded-md">
                            <button
                              className="px-3 py-1 hover:bg-gray-100"
                              onClick={() => decrement(product)}
                            >
                              -
                            </button>
                            <span className="px-2 min-w-[20px] text-center">
                              {product.quantity}
                            </span>
                            <button
                              className="px-3 py-1 hover:bg-gray-100"
                              onClick={() => increment(product)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ul>

            <footer className="absolute bottom-0 w-full h-[100px] p-4">
              <button className="w-full mt-4 bg-primary text-white py-3 px-4 rounded-md text-sm font-semibold uppercase cursor-pointer transition-all hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed">
                Check out
              </button>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};
