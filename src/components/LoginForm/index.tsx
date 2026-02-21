import { useRegisterForm } from '../RegisterForm/register-form.schema';

export const LoginForm = () => {
  const { register, errors, isSubmitting } = useRegisterForm();
  return (
    <form className="text-primary">
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
