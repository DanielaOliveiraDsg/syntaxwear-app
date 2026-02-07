import { useState } from 'react';
import IconCart from '../../assets/images/icons/icon-cart.svg';
import MensTreeDasher from '@/assets/images/products/tree-dasher-2-natural-black-boyal-blue.webp';
import MensTreeRunnerNz from '@/assets/images/products/tree-runner-nz-weathered-brown.webp';
import MensWoolCruiser from '@/assets/images/products/wool-cruiser-burgundy.webp';
import MensWoolCruiserSlipOn from '@/assets/images/products/wool-cruiser-slip-on-dark-grey.webp';
import MensWoolCruiserWaterproof from '@/assets/images/products/wool-cruiser-waterproof-natural-black.webp';
import { formatCurrency } from '../../utils/formatCurrency';

const productsInCart = [
  { id: 1, name: 'Produto 1', image: MensTreeDasher, price: 350, quantity: 5 },
  { id: 2, name: 'Produto 2', image: MensTreeRunnerNz, price: 75, quantity: 2 },
  { id: 3, name: 'Produto 3', image: MensWoolCruiser, price: 85, quantity: 4 },
  {
    id: 4,
    name: 'Produto 4',
    image: MensWoolCruiserSlipOn,
    price: 135,
    quantity: 6,
  },
  {
    id: 5,
    name: 'Produto 5',
    image: MensWoolCruiserWaterproof,
    price: 150,
    quantity: 2,
  },
  { id: 1, name: 'Produto 1', image: MensTreeDasher, price: 350, quantity: 5 },
  { id: 2, name: 'Produto 2', image: MensTreeRunnerNz, price: 75, quantity: 2 },
  { id: 3, name: 'Produto 3', image: MensWoolCruiser, price: 85, quantity: 4 },
];

export const ShoppingCart = () => {
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className="cursor-pointer"
        onClick={() => setCartIsOpen(!cartIsOpen)}
      >
        <img src={IconCart} alt="Shopping cart icon" />
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
            <p className="text-2xl font-bold">
              Shopping Cart ({productsInCart.length})
            </p>
            <button
              className="text-xl cursor-pointer"
              onClick={() => setCartIsOpen(!cartIsOpen)}
            >
              X
            </button>
          </header>

          {/* Mock products, later will be done with Backend */}
          <ul className="px-4 overflow-y-auto scrollbar-hide h-[calc(100%-140px)]">
            {productsInCart.map((product) => (
              <li
                key={product.id}
                className="flex flex-col gap-1 px-6 py-1 mt-4 border-b border-gray-300"
              >
                <button className="self-end text-xs cursor-pointer">X</button>

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
                      <button className="cursor-pointer font-bold text-lg">
                        -
                      </button>
                      <p>{product.quantity}</p>
                      <button className="cursor-pointer font-bold">+</button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <footer className="absolute bottom-0 w-full h-[100px] p-4">
            <button className="w-full mt-4 bg-[#6329A2] text-white py-3 px-4 rounded-md text-sm font-semibold uppercase cursor-pointer transition-all hover:bg-[#5433eb] focus:outline-none focus:ring-2 focus:ring-[#5433eb] disabled:opacity-50 disabled:cursor-not-allowed">
              Check out
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};
