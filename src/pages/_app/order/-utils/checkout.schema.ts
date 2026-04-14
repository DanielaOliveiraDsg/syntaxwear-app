import { z } from "zod";

export const checkoutFormSchema = z.object({
  street: z.string().min(1, "Street is required"),
  number: z.string().min(1, "Number is required"),
  complement: z.string().optional(),
  zipcode: z.string().min(5, "Invalid zipcode"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required"),
  paymentMethod: z.string().min(1, "Payment method is required"),
});

export type CheckoutFormData = z.infer<typeof checkoutFormSchema>;