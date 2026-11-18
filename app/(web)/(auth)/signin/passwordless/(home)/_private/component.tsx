"use client";

import { ShadcnToast } from "@/components/shared/shadcn";
import { FieldGroup } from "@/components/ui/field";
import { WebRoutes } from "@/lib/constants/routes/web-routes";
import { useAppForm } from "@/lib/tanstack-form/context";
import { LogInIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  SigninEmailPasswordlessSchema,
  SigninEmailPasswordlessSchemaType,
} from "./schema";

export const SigninEmailPasswordless = () => {
  const router = useRouter();
  const form = useAppForm({
    defaultValues: {
      email: "",
    } as SigninEmailPasswordlessSchemaType,
    validators: {
      onSubmit: SigninEmailPasswordlessSchema,
    },
    onSubmit: async ({ value }) => {
      await new Promise((res) => setTimeout(res, 1000));
      ShadcnToast({ title: "Success" });
      router?.push(WebRoutes?.auth?.signin?.passwordless?.verify);
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
        <form.AppField name="email">
          {(field) => (
            <field.TextField
              label="Email"
              placeholder="safi-work@gmail.com"
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
