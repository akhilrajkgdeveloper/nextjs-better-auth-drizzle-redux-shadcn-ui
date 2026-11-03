import { z } from "zod";

export const signInValidator = z.object({
  email: z.email(),
  password: z.string(),
});

export const signUpValidator = z.object({
  name: z.string().min(3),
  email: z.email(),
  password: z.string().min(6),
});
