import { z } from "zod";

export const SignupEmailSchema = z.object({
  email: z.email(),
});

export type SignupEmailSchemaType = z.infer<typeof SignupEmailSchema>