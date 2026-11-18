import { z } from "zod";

export const SignupEmailCreateSchema = z.object({
  name: z.string().min(2).max(100),
  username: z
    .string()
    .min(8)
    .max(100)
    .refine((val) => !val?.includes("@"))
    .refine((val) => !val?.includes("."))
    .refine((val) => !val?.includes(".com")),
  password: z.string().min(8).max(100),
});

export type SignupEmailCreateSchemaType = z.infer<
  typeof SignupEmailCreateSchema
>;
