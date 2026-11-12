"use client";

import { Input } from "@/components/ui/input";
import { useFieldContext } from "@/lib/tanstack-form/context";
import { useSelector } from "@tanstack/react-form";
import type { ComponentProps } from "react";
import { Field, FieldError, FieldLabel } from "../ui/field";

type TextFieldProps = Omit<
  ComponentProps<typeof Input>,
  "id" | "name" | "value" | "onChange" | "onBlur"
> & {
  label?: string;
};

export const TextField = ({ label, ...inputProps }: TextFieldProps) => {
  // Restrict this reusable component to string fields.
  const field = useFieldContext<string>();
  const errors = useSelector(field?.store, (state) => state?.meta?.errors);
  const isInvalid = errors.length > 0;

  return (
    <Field data-invalid={isInvalid}>
      {label ? <FieldLabel htmlFor={field?.name}>{label}</FieldLabel> : null}

      <Input
        {...inputProps}
        id={field?.name}
        name={field?.name}
        value={field?.state.value}
        onBlur={field?.handleBlur}
        onChange={(event) => field?.handleChange(event.target.value)}
        aria-invalid={isInvalid}
      />

      {isInvalid ? <FieldError errors={errors} /> : null}
    </Field>
  );
};
