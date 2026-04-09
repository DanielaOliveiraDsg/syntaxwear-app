import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const registerUserFormSchema = z
  .object({
    firstName: z.string().min(1, 'Required'),

    lastName: z.string().min(1, 'Required'),

    email: z.email('Invalid e-mail address').nonempty('E-mail is required'),

    birthDate: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), 'Invalid birth date'),

    phone: z.string().min(1, 'Required'),

    password: z
      .string()
      .min(6, 'Password must be at least 6 characters long')
      .regex(/(?=.*[a-z])/, 'Password must contain at least one lowercase letter')
      .regex(/(?=.*\d)/, 'Password must contain at least one number')
      .regex(/(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/, 'Password must contain at least one special character'),

    confirmPassword: z.string().min(1, 'Password confirmation is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type RegisterUserFormData = z.infer<typeof registerUserFormSchema>;

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<RegisterUserFormData>({
    resolver: zodResolver(registerUserFormSchema),
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      birthDate: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
    criteriaMode: 'all',
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
