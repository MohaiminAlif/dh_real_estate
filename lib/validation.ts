import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Please enter your name"),

  email: z
    .string()
    .email("Please enter a valid email"),

  phone: z
    .string()
    .min(10, "Please enter a valid phone number"),

  service: z.string(),

  budget: z.string(),

  message: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadSchema>;