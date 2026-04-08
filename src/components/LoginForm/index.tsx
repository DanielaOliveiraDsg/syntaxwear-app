import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext/AuthContext';
import { useLoginForm, type LoginUserFormData } from './login-form.schema';
import { useNavigate } from '@tanstack/react-router';

export const LoginForm = () => {
  const { register, errors, isSubmitting, handleSubmit } = useLoginForm();
  const [error, setError] = useState<string | null>(null);

  const { login } = useAuth();

  const navigate  = useNavigate();

  const onSubmit = async (data: LoginUserFormData) => {
    try {
      await login(data);
      navigate({ to: '/' });
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred during login.');
      }
    }
  };

  return (
    <form className="text-primary" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="text-xs text-gray-600">E-mail*</label>
        <input
          type="email"
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1
                    ${errors.email ? 'border-red-500 focus:ring-red-400' : 'border-border focus:ring-accent'}
                    `}
          {...register('email')}
        />
        {errors.email && (
          <span className="text-xs text-red-600 mt-1">
            {errors.email.message}
          </span>
        )}
      </div>
      <div>
        <label className="text-xs text-gray-600">Password*</label>
        <input
          type="password"
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1
                    ${errors.password ? 'border-red-500 focus:ring-red-400' : 'border-border focus:ring-accent'}
                    `}
          {...register('password')}
        />
        {errors.password && (
          <span className="text-xs text-red-600 mt-1">
            {errors.password.message}
          </span>
        )}
      </div>
      {error && <span className="text-xs text-red-600 mt-1 text-center">{error}</span>}
      <button
        type="submit"
        className="w-full mt-4 bg-primary text-white py-3 px-4 rounded-md text-sm font-semibold uppercase cursor-pointer transition-all hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Continue'}
      </button>
    </form>
  );
};
