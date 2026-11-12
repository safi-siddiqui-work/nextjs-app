"use client";

import { ShadcnToast } from "@/components/shared/shadcn";
import { FieldGroup } from "@/components/ui/field";
import { useAppForm } from "@/lib/tanstack-form/context";
import { LogInIcon } from "lucide-react";
import { SignupEmailSchema, SignupEmailSchemaType } from "./schema";

export const SignupEmail = () => {
  const form = useAppForm({
    defaultValues: {
      email: "",
    } as SignupEmailSchemaType,
    validators: {
      onSubmit: SignupEmailSchema,
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
          {(field) => <field.TextField label="Email" />}
        </form.AppField>

        <form.AppForm>
          <form.SubmitButton icon={LogInIcon}>Sign Up</form.SubmitButton>
        </form.AppForm>
      </FieldGroup>
    </form>
  );
};
