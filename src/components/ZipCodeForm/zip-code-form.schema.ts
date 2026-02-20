import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const onlyDigits = (value: string) => value.replace(/\D/g, "");

const validateZipCode = (value: string) => {
  return /^\d{5}$/.test(value);
}
export const zipCodeFormSchema = z.object({
  zipCode: z
    .string()
    .nonempty("Zip code is required")
    .transform(onlyDigits)
    .refine((val) => validateZipCode(val), {
      message: "Invalid zip code",
    }),
});

export type ZipCodeFormData = z.infer<typeof zipCodeFormSchema>;

export const useZipCodeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ZipCodeFormData>({
    resolver: zodResolver(zipCodeFormSchema),
    mode: "onBlur",
    defaultValues: { zipCode: "" },
    criteriaMode: "all",
  });

  return { register, handleSubmit, errors, isSubmitting, reset };
};
