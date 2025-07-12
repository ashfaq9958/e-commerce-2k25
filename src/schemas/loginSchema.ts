import { z } from "zod"; 

export const loginSchema = z.object({
  identifier: z
    .string()
    .trim()
    .min(3, { message: "Username or email must be at least 3 characters long" })
    .max(255, { message: "Username or email must not exceed 255 characters" }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(128, { message: "Password must not exceed 128 characters" }),
});
