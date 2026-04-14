interface CheckoutButtonProps {
  isCartEmpty: boolean;
  itemCount: number;
  emptyText: string;
  onClick: () => void;
  disableIfEmpty?: boolean;
}

export const CheckoutButton = ({ isCartEmpty, itemCount, emptyText, onClick, disableIfEmpty = false}: CheckoutButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isCartEmpty && disableIfEmpty}
      className="w-full mt-4 bg-primary text-white py-3 px-4 rounded-md text-sm font-semibold uppercase tracking-widest cursor-pointer transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:grayscale"
    >
      {isCartEmpty ? emptyText : `Checkout (${itemCount})`}
    </button>
  );
};