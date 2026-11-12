"use client";

import { ShadcnToast } from "@/components/shared/shadcn";
import { FieldGroup } from "@/components/ui/field";
import { useAppForm } from "@/lib/tanstack-form/context";
import { LogInIcon } from "lucide-react";
import {
  SigninEmailPasswordSchema,
  SigninEmailPasswordSchemaType,
} from "./schema";

export const SigninEmailPassword = () => {
  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    } as SigninEmailPasswordSchemaType,
    validators: {
      onSubmit: SigninEmailPasswordSchema,
    },
    onSubmit: async ({ value }) => {
      await new Promise((res) => setTimeout(res, 1000));
      ShadcnToast({ title: "Success" });
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

        <form.AppField name="password">
          {(field) => (
            <field.TextField
              label="Password"
              placeholder="********"
              type="password"
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
