import { z } from "zod";

export const SignupEmailVerifySchema = z.object({
  code: z.string().min(6),
});

export type SignupEmailVerifySchemaType = z.infer<
  typeof SignupEmailVerifySchema
>;
