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
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-6">
        Order Confirmed!
      </h1>
      <p className="text-gray-600 mb-10">
        Thank you for your purchase. Your order ID is:{' '}
        <span className="font-mono font-bold text-black">{orderId}</span>
      </p>
      <button
        onClick={() => (window.location.href = '/')}
        className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity cursor-pointer"
      >
        Back to Home
      </button>
    </div>
  );
}
