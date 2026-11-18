import { z } from "zod";

export const SigninEmailPasswordSchema = z.object({
  email: z.email(),
  password: z.string().nonempty(),
});

export type SigninEmailPasswordSchemaType = z.infer<
  typeof SigninEmailPasswordSchema
>;
