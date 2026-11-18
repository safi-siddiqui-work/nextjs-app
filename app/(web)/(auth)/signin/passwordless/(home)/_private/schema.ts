import { z } from "zod";

export const SigninEmailPasswordlessSchema = z.object({
  email: z.email(),
});

export type SigninEmailPasswordlessSchemaType = z.infer<
  typeof SigninEmailPasswordlessSchema
>;
