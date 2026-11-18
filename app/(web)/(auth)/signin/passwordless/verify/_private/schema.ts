import { z } from "zod";

export const SigninEmailPasswordlessVerifySchema = z.object({
  code: z.string().min(6),
});

export type SigninEmailPasswordlessVerifySchemaType = z.infer<
  typeof SigninEmailPasswordlessVerifySchema
>;
