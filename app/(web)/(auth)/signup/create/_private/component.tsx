"use client";

import { ShadcnToast } from "@/components/shared/shadcn";
import { FieldGroup } from "@/components/ui/field";
import { WebRoutes } from "@/lib/constants/routes/web-routes";
import { useAppForm } from "@/lib/tanstack-form/context";
import { LogInIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { SignupEmailCreateSchema, SignupEmailCreateSchemaType } from "./schema";

export const SignupEmailCreate = () => {
  const router = useRouter();
  const form = useAppForm({
    defaultValues: {
      name: "",
      password: "",
      username: "",
    } as SignupEmailCreateSchemaType,
    validators: {
      onSubmit: SignupEmailCreateSchema,
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
        <form.AppField name="name">
          {(field) => (
            <field.TextField
              label="Name"
              placeholder="Safi Siddiqui"
            />
          )}
        </form.AppField>

        <form.AppField name="username">
          {(field) => (
            <field.TextField
              label="Username"
              placeholder="safi-work"
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
          <form.SubmitButton icon={LogInIcon}>Create</form.SubmitButton>
        </form.AppForm>
      </FieldGroup>
    </form>
  );
};
