import { z } from "zod";

export const registerSchema = z.object({
  fullname: z
    .string()
    .trim()
    .min(3, { message: "Full name must be at least 3 characters long" })
    .max(100, { message: "Full name must not exceed 100 characters" }),

  username: z
    .string()
    .trim()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(30, { message: "Username must not exceed 30 characters" })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores",
    }),

  email: z
    .string()
    .trim()
    .min(5, { message: "Email must be at least 5 characters long" })
    .max(254, { message: "Email must not exceed 254 characters" })
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: "Invalid email address format",
    }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(128, { message: "Password must not exceed 128 characters" })
    .regex(/[a-z]/, {
      message: "Password must include at least one lowercase letter",
    })
    .regex(/[A-Z]/, {
      message: "Password must include at least one uppercase letter",
    })
    .regex(/[0-9]/, { message: "Password must include at least one number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must include at least one special character",
    }),
});
