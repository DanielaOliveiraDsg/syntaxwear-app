import { createFileRoute } from '@tanstack/react-router';

type OrderSearch = {
  orderId: string;
};

export const Route = createFileRoute('/_app/order/confirmation')({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): OrderSearch => {
    return {
      orderId: (search.orderId as string) || '',
    };
  },
});

function RouteComponent() {
  const { orderId } = Route.useSearch();

  return (
    <div className="container mx-auto pt-40 pb-20 text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        Order Confirmed!
      </h1>
      <p className="text-gray-600 mb-8">
        Thank you for your purchase. Your order ID is:{' '}
        <span className="font-mono font-bold text-black">{orderId}</span>
      </p>
      <button
        onClick={() => (window.location.href = '/')}
        className="bg-black text-white px-8 py-3 rounded-full font-bold"
      >
        Back to Home
      </button>
    </div>
  );
}
