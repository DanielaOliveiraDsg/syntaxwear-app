import { useContext, useState } from 'react';
import IconCart from '../../assets/images/icons/icon-cart.svg';
import { formatCurrency } from '../../utils/formatCurrency';
import { CartContext } from '../../contexts/CartContext';

export const ShoppingCart = () => {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
  const { cart, removeItem, increment, decrement } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <button
        className="relative cursor-pointer"
        onClick={() => setCartIsOpen(!cartIsOpen)}
      >
        <img src={IconCart} alt="Shopping cart icon" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-3.5 bg-red-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* Overlay */}
      <div
        className={`${cartIsOpen ? 'bg-black/70 visible' : 'bg-transparent invisible'} fixed top-0 bottom-0 left-0 right-0 transition-all duration-300 ease-in-out`}
        onClick={() => setCartIsOpen(!cartIsOpen)}
      >
        {/* drawer */}
        <div
          className={`${cartIsOpen ? 'translate-x-0' : 'translate-x-full'} absolute top-0 right-0 bottom-0 bg-background pt-6 transition-all duration-500 ease-in-out w-75 md:w-106`}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="flex items-center justify-between px-5">
            <p className="text-2xl font-bold">Shopping Cart ({cart.length})</p>
            <button
              className="text-xl cursor-pointer"
              onClick={() => setCartIsOpen(!cartIsOpen)}
            >
              X
            </button>
          </header>

          {/* Mock products, later will be done with Backend */}
          <ul className="px-4 overflow-y-auto scrollbar-hide h-[calc(100%-140px)]">
            {cart.map((product) => (
              <li
                key={product.id}
                className="flex flex-col gap-1 px-6 py-1 mt-4 border-b border-border"
              >
                <button
                  className="self-end text-xs cursor-pointer"
                  onClick={() => removeItem(product.id)}
                >
                  X
                </button>

                {/* each product in the cart */}

                <div className="flex items-center gap-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16"
                  />
                  <div className="flex gap-8 items-start">
                    <div>
                      <p className="mb-1 text-sm">{product.name}</p>
                      <p className="mb-1 text-sm">
                        Quantity: {product.quantity}
                      </p>
                      <p className="mb-3.5">
                        <span className="font-bold">
                          {formatCurrency(product.price)}
                        </span>
                      </p>
                    </div>

                    <div className="border flex  items-center gap-6 py-1 px-3">
                      <button
                        className="cursor-pointer font-bold text-lg"
                        onClick={() => decrement(product)}
                      >
                        -
                      </button>
                      <p>{product.quantity}</p>
                      <button
                        className="cursor-pointer font-bold"
                        onClick={() => increment(product)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <footer className="absolute bottom-0 w-full h-[100px] p-4">
            <button className="w-full mt-4 bg-primary text-white py-3 px-4 rounded-md text-sm font-semibold uppercase cursor-pointer transition-all hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed">
              Check out
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};
