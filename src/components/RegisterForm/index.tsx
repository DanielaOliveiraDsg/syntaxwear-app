import { useRegisterForm } from "./register-form.schema";

export const RegisterForm = () => {
  const { register, errors } = useRegisterForm();

  return (
    <form className="text-[#6329A2]">
      <div>
        <label className="text-xs text-gray-600">E-mail*</label>
        <input
          className={`
                        w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-1" 
                    type="email 
                    ${errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
          {...register("email")}
        />

        {errors.email && (
          <span className="text-xs text-red-600 mt-1">
            {errors.email.message}
          </span>
        )}
      </div>
    </form>
  );
};
