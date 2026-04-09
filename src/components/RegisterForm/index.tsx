import { useNavigate } from '@tanstack/react-router';
import { useAuth } from '../../contexts/AuthContext/AuthContext';
import {
  useRegisterForm,
  type RegisterUserFormData,
} from './register-form.schema';
import { useState } from 'react';

export const RegisterForm = () => {
  const [serverError, setServerError] = useState<string | null>(null);

  const { register, errors, isSubmitting, handleSubmit, setError: setFormError } = useRegisterForm();

  const { signUp } = useAuth();

  const navigate = useNavigate();

  const setServerFieldError = (message: string) => {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('email')) {
      setFormError('email', { type: 'server', message });
    } else if (lowerMessage.includes('password')) {
      setFormError('password', { type: 'server', message });
    }
  };

  async function handleRegisterUser(data: RegisterUserFormData) {
    const registerData = { ...data };
    delete (registerData as Partial<RegisterUserFormData>).confirmPassword;

    setServerError(null);
    console.log('Registering user with data:', registerData);

    try {
      await signUp(registerData);
      navigate({ to: '/' });
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error registering user:', error.message);
        setServerError(error.message);
        setServerFieldError(error.message);
      } else {
        console.error('Error registering user:');
        setServerError('An unknown error occurred');
      }
    }
  }

  return (
    <form
      className="text-primary space-y-4"
      onSubmit={handleSubmit(handleRegisterUser)}
    >
      <div>
        <label className="text-xs text-gray-text">Name*</label>
        <input
          type="text"
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1
                    ${errors.firstName ? 'border-error focus:ring-error' : 'border-border focus:ring-primary-hover'}
                    `}
          {...register('firstName')}
        />
        {errors.firstName && (
          <span className="text-xs text-error mt-1">
            {errors.firstName.message}
          </span>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-text">Last Name*</label>
        <input
          type="text"
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1
                    ${errors.lastName ? 'border-error focus:ring-error' : 'border-border focus:ring-primary-hover'}
                    `}
          {...register('lastName')}
        />
        {errors.lastName && (
          <span className="text-xs text-error mt-1">
            {errors.lastName.message}
          </span>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-text">E-mail*</label>
        <input
          type="email"
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1
                    ${errors.email ? 'border-error focus:ring-error' : 'border-border focus:ring-primary-hover'}
                    `}
          {...register('email')}
        />
        {errors.email && (
          <span className="text-xs text-error mt-1">
            {errors.email.message}
          </span>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-text">Birthdate</label>
        <input
          type="date"
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1
                    ${errors.birthDate ? 'border-error focus:ring-error' : 'border-border focus:ring-primary-hover'}
                    `}
          {...register('birthDate')}
        />
        {errors.birthDate && (
          <span className="text-xs text-error mt-1">
            {errors.birthDate.message}
          </span>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-text">Phone number*</label>
        <input
          type="tel"
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1
                    ${errors.phone ? 'border-error focus:ring-error' : 'border-border focus:ring-primary-hover'}
                    `}
          {...register('phone')}
        />
        {errors.phone && (
          <span className="text-xs text-error mt-1">
            {errors.phone.message}
          </span>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-text">Password*</label>
        <input
          type="password"
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1
                    ${errors.password ? 'border-error focus:ring-error' : 'border-border focus:ring-primary-hover'}
                    `}
          {...register('password')}
        />
        <p className="text-[11px] text-gray-text mt-1">
          Password must be at least 6 characters, include one lowercase letter, one number, and one special character.
        </p>
        {errors.password && (
          <span className="text-xs text-error mt-1">
            {errors.password.message}
          </span>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-text">Confirm password*</label>
        <input
          type="password"
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1
                    ${errors.confirmPassword ? 'border-error focus:ring-error' : 'border-border focus:ring-primary-hover'}
                    `}
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && (
          <span className="text-xs text-error mt-1">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="w-full mt-2 bg-primary text-white py-3 px-4 rounded-md text-sm font-semibold uppercase cursor-pointer transition-all hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary-hover disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Continue'}
      </button>
      {serverError && (
        <p className="text-xs text-error mt-1 text-center">{serverError}</p>
      )}
    </form>
  );
};
