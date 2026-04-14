// src/pages/_app/order/-components/OrderSummary.tsx
import type { ProductCart } from '../../../../interfaces/cartInterface';
import { formatCurrency } from '../../../../utils/formatCurrency';


interface OrderSummaryProps {
  cart: ProductCart[];
  totalAmount: number;
}

export const OrderSummary = ({ cart, totalAmount }: OrderSummaryProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl h-fit border border-gray-100">
      <h2 className="text-xl font-bold mb-6 uppercase tracking-tight">Order Summary</h2>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={`${item.id}-${item.selectedSize}`}
            className="flex justify-between items-center"
          >
            <div className="flex flex-col">
              <span className="font-semibold text-sm">
                {item.name}
              </span>
              <span className="text-xs text-gray-500 uppercase">
                Size: {item.selectedSize} | Qty: {item.quantity}
              </span>
            </div>
            <span className="font-medium">
              {formatCurrency(Number(item.price) * item.quantity)}
            </span>
          </div>
        ))}

        <div className="border-t border-gray-200 pt-4 mt-6 flex justify-between items-end">
          <span className="text-gray-500 uppercase text-xs font-bold">Total</span>
          <span className="text-2xl font-black text-primary">
            {formatCurrency(totalAmount)}
          </span>
        </div>
      </div>
    </div>
  );
};