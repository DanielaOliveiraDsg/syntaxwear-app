import { useContext } from 'react';
import IconCart from '../../assets/images/icons/icon-cart.svg';
import { CartContext } from '../../contexts/CartContext';

interface CartButtonProps {
  onClick: () => void;
}

export const CartButton = ({ onClick }: CartButtonProps) => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <button
      className="relative cursor-pointer"
      onClick={onClick}
    >
      <img src={IconCart} alt="Shopping cart icon" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-3.5 bg-red-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </button>
  );
};
