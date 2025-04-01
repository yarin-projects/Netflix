import { z } from "zod";

export const signupSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid Email"),
    password: z.string().min(6, "Password must be a least 6 characters")
});

export const loginSchema = z.object({
  email: z.string().email("Invalid Email"),
  password: z.string().min(6, "Password must be a least 6 characters"),
});

export const updateScehma = z.object({
  name: z.string().min(1, "Name is required"),
});

export type SignupFormData = z.infer<typeof signupSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type UpdateFormData = z.infer<typeof updateScehma>;