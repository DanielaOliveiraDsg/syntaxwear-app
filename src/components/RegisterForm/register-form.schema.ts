import z from "zod";
import { isValidCPF } from "../../utils/isValidCPF";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const registerUserFormSchema = z
  .object({
    firstName: z.string().min(1, "Required"),

    lastName: z.string().min(1, "Required"),

    email: z.email("Invalid e-mail address").nonempty("E-mail is required"),

    cpf: z.string().min(1, "Required").refine(isValidCPF, {
      message: "Invalid CPF",
    }),

    birthDate: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), "Invalid birth date"),

    phone: z.string().min(1, "Required"),

    password: z.string().min(8, "8 characters minimum"),

    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterUserFormData = z.infer<typeof registerUserFormSchema>;

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<RegisterUserFormData>({
    resolver: zodResolver(registerUserFormSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      cpf: '',
      birthDate: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
    criteriaMode: "all",
  });

  return {
    handleSubmit,
    register,
    errors,
    isSubmitting,
    setError,
    reset,
  };
};
