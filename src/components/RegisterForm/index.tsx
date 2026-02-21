import { useRegisterForm } from './register-form.schema';

export const RegisterForm = () => {
  const { register, errors, isSubmitting } = useRegisterForm();

  return (
    <form className="text-primary space-y-4">
      {/* First Name field */}
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

      {/* Last Name field */}
      <div>
        <label className="text-xs text-gray-text">Lastname*</label>
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

      {/* E-mail field */}
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

      {/* CPF field */}
      <div>
        <label className="text-xs text-gray-text">CPF*</label>
        <input
          type="text"
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1
                    ${errors.cpf ? 'border-error focus:ring-error' : 'border-border focus:ring-primary-hover'}
                    `}
          {...register('cpf')}
        />
        {errors.cpf && (
          <span className="text-xs text-error mt-1">
            {errors.cpf.message}
          </span>
        )}
      </div>

      {/* Birthdate field */}
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

      {/* Phone number field */}
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

      {/* Password field */}
      <div>
        <label className="text-xs text-gray-text">Password*</label>
        <input
          type="password"
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1
                    ${errors.password ? 'border-error focus:ring-error' : 'border-border focus:ring-primary-hover'}
                    `}
          {...register('password')}
        />
        {errors.password && (
          <span className="text-xs text-error mt-1">
            {errors.password.message}
          </span>
        )}
      </div>

      {/* Confirm Password field */}
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
        {isSubmitting ? "Submitting..." : "Continue"}
      </button>
    </form>
  );
};
