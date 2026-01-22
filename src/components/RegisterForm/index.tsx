import { useRegisterForm } from './register-form.schema';

export const RegisterForm = () => {
  const { register, errors, isSubmitting } = useRegisterForm();

  return (
    <form className="text-[#6329A2] space-y-4">
      {/* First Name field */}
      <div>
        <label className="text-xs text-gray-600">Name*</label>
        <input
          type="text"
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1
                    ${errors.firstName ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-[#5433eb]'}
                    `}
          {...register('firstName')}
        />
        {errors.firstName && (
          <span className="text-xs text-red-600 mt-1">
            {errors.firstName.message}
          </span>
        )}
      </div>

      {/* Last Name field */}
      <div>
        <label className="text-xs text-gray-600">Lastname*</label>
        <input
          type="text"
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1
                    ${errors.lastName ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-[#5433eb]'}
                    `}
          {...register('lastName')}
        />
        {errors.lastName && (
          <span className="text-xs text-red-600 mt-1">
            {errors.lastName.message}
          </span>
        )}
      </div>

      {/* E-mail field */}
      <div>
        <label className="text-xs text-gray-600">E-mail*</label>
        <input
          type="email"
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1
                    ${errors.email ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-[#5433eb]'}
                    `}
          {...register('email')}
        />
        {errors.email && (
          <span className="text-xs text-red-600 mt-1">
            {errors.email.message}
          </span>
        )}
      </div>

      {/* CPF field */}
      <div>
        <label className="text-xs text-gray-600">CPF*</label>
        <input
          type="text"
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1
                    ${errors.cpf ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-[#5433eb]'}
                    `}
          {...register('cpf')}
        />
        {errors.cpf && (
          <span className="text-xs text-red-600 mt-1">
            {errors.cpf.message}
          </span>
        )}
      </div>

      {/* Birthdate field */}
      <div>
        <label className="text-xs text-gray-600">Birthdate</label>
        <input
          type="date"
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1
                    ${errors.birthDate ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-[#5433eb]'}
                    `}
          {...register('birthDate')}
        />
        {errors.birthDate && (
          <span className="text-xs text-red-600 mt-1">
            {errors.birthDate.message}
          </span>
        )}
      </div>

      {/* Phone number field */}
      <div>
        <label className="text-xs text-gray-600">Phone number*</label>
        <input
          type="tel"
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1
                    ${errors.phone ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-[#5433eb]'}
                    `}
          {...register('phone')}
        />
        {errors.phone && (
          <span className="text-xs text-red-600 mt-1">
            {errors.phone.message}
          </span>
        )}
      </div>

      {/* Password field */}
      <div>
        <label className="text-xs text-gray-600">Password*</label>
        <input
          type="password"
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1
                    ${errors.password ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-[#5433eb]'}
                    `}
          {...register('password')}
        />
        {errors.password && (
          <span className="text-xs text-red-600 mt-1">
            {errors.password.message}
          </span>
        )}
      </div>

      {/* Confirm Password field */}
      <div>
        <label className="text-xs text-gray-600">Confirm password*</label>
        <input
          type="password"
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1
                    ${errors.confirmPassword ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-[#5433eb]'}
                    `}
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && (
          <span className="text-xs text-red-600 mt-1">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="w-full mt-2 bg-[#6329A2] text-white py-3 px-4 rounded-md text-sm font-semibold uppercase cursor-pointer transition-all hover:bg-[#5433eb] focus:outline-none focus:ring-2 focus:ring-[#5433eb] disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Continue"}
      </button>
    </form>
  );
};
