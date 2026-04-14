import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useContext, useState } from 'react';
import { CartContext } from '../../../contexts/CartContext/CartContext';
import { useForm } from 'react-hook-form';
import {
  type CheckoutFormData,
  checkoutFormSchema,
} from './-utils/checkout.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  createOrder,
  mapCartToOrderItems,
} from '../../../services/orderService';
import { OrderSummary } from './-components/OrderSummary';
import { formatCurrency } from '../../../utils/formatCurrency';

export const Route = createFileRoute('/_app/order/checkout')({
  component: RouteComponent,
});

function RouteComponent() {
  const { cart, totalAmount, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      street: '',
      number: '',
      complement: '',
      zipcode: '',
      city: '',
      state: '',
      country: 'USA',
      paymentMethod: 'CREDIT_CARD',
    },
  });

  const onSubmit = async (data: CheckoutFormData) => {
    try {
      setError(null);

      const orderData = {
        items: mapCartToOrderItems(cart),
        shippingAddress: {
          zipcode: data.zipcode,
          street: data.street,
          number: data.number,
          complement: data.complement,
          city: data.city,
          state: data.state,
          country: data.country,
        },
        paymentMethod: data.paymentMethod,
      };

      const response = await createOrder(orderData);

      //if success
      clearCart();
      navigate({ to: '/order/confirmation', search: { orderId: response.id } });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An error occurred during checkout'
      );
    }
  };

  return (

      <div className="h-full">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <h2 className="text-2xl font-bold text-gray-400">
              Your cart is empty
            </h2>
            <button
              onClick={() => navigate({ to: '/products' })}
              className="m-4 bg-primary text-white px-6 py-2 rounded-lg"
            >
              Go to Products
            </button>
          </div>
        ) : (
          <div className="container mx-auto pt-40 pb-20 px-8 text-text-secondary ">
            <h1 className="text-3xl font-semibold mb-8 text-center">
              Checkout
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Shipping Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <h2 className="text-xl font-semibold">Shipping Information</h2>

                {error && (
                  <p className="text-red-500 text-sm bg-red-50 p-3 rounded">
                    {error}
                  </p>
                )}

                <input
                  {...register('street')}
                  placeholder="Street"
                  className="w-full p-3 border rounded-lg"
                />
                {errors.street && (
                  <span className="text-red-500 text-xs">
                    {errors.street.message}
                  </span>
                )}

                <div className="flex gap-4">
                  <div className="w-1/3">
                    <input
                      {...register('number')}
                      placeholder="Number"
                      className="w-full p-3 border rounded-lg"
                    />
                    {errors.number && (
                      <span className="text-red-500 text-xs">
                        {errors.number.message}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      {...register('zipcode')}
                      placeholder="Zipcode"
                      className="w-full p-3 border rounded-lg"
                    />
                    {errors.zipcode && (
                      <span className="text-red-500 text-xs">
                        {errors.zipcode.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      {...register('city')}
                      placeholder="City"
                      className="w-full p-3 border rounded-lg"
                    />
                    {errors.city && (
                      <span className="text-red-500 text-xs">
                        {errors.city.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      {...register('state')}
                      placeholder="State"
                      className="w-full p-3 border rounded-lg"
                    />
                    {errors.state && (
                      <span className="text-red-500 text-xs">
                        {errors.state.message}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 bg-primary text-white py-4 px-4 rounded-md  font-semibold uppercase cursor-pointer transition-all hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing...' : `Pay ${formatCurrency(totalAmount)}`}
                </button>
              </form>
              <OrderSummary cart={cart} totalAmount={totalAmount}/>
            </div>
          </div>
        )}
      </div>

  );
}
