import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export const loginUserFormSchema = z.object({
  email: z
    .string()
    .email('Invalid e-mail address')
    .nonempty('E-mail is required'),
  password: z.string().min(1, 'Password is required'),
});

export type LoginUserFormData = z.infer<typeof loginUserFormSchema>;

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<LoginUserFormData>({
    resolver: zodResolver(loginUserFormSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    setError,
    reset,
  };
};
