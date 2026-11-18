"use client";

import { ShadcnToast } from "@/components/shared/shadcn";
import { FieldGroup } from "@/components/ui/field";
import { WebRoutes } from "@/lib/constants/routes/web-routes";
import { useAppForm } from "@/lib/tanstack-form/context";
import { LogInIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  SigninEmailPasswordlessVerifySchema,
  SigninEmailPasswordlessVerifySchemaType,
} from "./schema";

export const SigninEmailPasswordless = () => {
  const router = useRouter();
  const form = useAppForm({
    defaultValues: {
      code: "",
    } as SigninEmailPasswordlessVerifySchemaType,
    validators: {
      onSubmit: SigninEmailPasswordlessVerifySchema,
    },
    onSubmit: async ({ value }) => {
      await new Promise((res) => setTimeout(res, 1000));
      ShadcnToast({ title: "Success" });
      router?.push(WebRoutes?.home);
    },
  });

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        form?.handleSubmit();
      }}
    >
      <FieldGroup>
        <form.AppField name="code">
          {(field) => (
            <field.OtpField
              label="Code"
              maxLength={6}
            />
          )}
        </form.AppField>

        <form.AppForm>
          <form.SubmitButton icon={LogInIcon}>Sign In</form.SubmitButton>
        </form.AppForm>
      </FieldGroup>
    </form>
  );
};
