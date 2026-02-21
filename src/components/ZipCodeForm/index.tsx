import { useState } from 'react';
import { useZipCodeForm } from './zip-code-form.schema';
import { formatCurrency } from '../../utils/formatCurrency';

export const ZipCodeForm = () => {
  const [shippingCost, setShippingCost] = useState<number | null>(null);
  const { register, handleSubmit, errors, isSubmitting, reset } =
    useZipCodeForm();

  const onSubmit = async ({ zipCode }: { zipCode: string }) => {
    try {
      //Fetch to verify zip exists (Optional but good for UX)
      const response = await fetch(`https://api.zippopotam.us/us/${zipCode}`);
      if (!response.ok) throw new Error('Zip not found');

      const data = await response.json();
      console.log(
        'Shipping to: ',
        data.places[0]['place name'],
        data.places[0].state
      );

      // Simple logic: First digit of US zip code roughly indicates the zone
      const regionPrefix = zipCode.charAt(0);
      let cost = 5.99; // Default/Local rate

      // Distance-based tiers (Study project logic)
      if (['0', '1', '2', '3'].includes(regionPrefix)) cost = 7.5; // East Coast
      if (['4', '5', '6'].includes(regionPrefix)) cost = 10.0; // Midwest
      if (['7', '8', '9'].includes(regionPrefix)) cost = 15.25; // West Coast

      setShippingCost(cost);

      reset();
    } catch (error) {
      alert('Please enter a valid zip code');
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <form
        className="flex gap-3 items-start"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Type your zipcode"
            className={`border border-surface-alt0 rounded-md p-2 ${errors.zipCode ? 'border-red-500' : ''}`}
            {...register('zipCode')}
          />
          {errors.zipCode && (
            <span className="text-sm text-red-600 mt-1">
              {errors.zipCode.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary text-accent-light py-2 px-6 rounded-md cursor-pointer transition hover:opacity-90 disabled:opacity-60 self-start"
        >
          Calculate
        </button>
      </form>
      {/* 3. Print out on screen */}
      {shippingCost !== null && (
        <div className="animate-in fade-in duration-500">
          <p className="text-sm text-green-800">
            Estimated Shipping:{' '}
            <span className="font-bold">{formatCurrency(shippingCost)}</span>
          </p>
        </div>
      )}
    </div>
  );
};
