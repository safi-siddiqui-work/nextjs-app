import { z } from "zod";

export const MvempSignupEmailSchema = z.object({
  email: z.email(),
});

export type MvempSignupEmailSchemaType = z.infer<typeof MvempSignupEmailSchema>;
