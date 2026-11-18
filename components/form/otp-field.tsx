"use client";

import { Input } from "@/components/ui/input";
import { useFieldContext } from "@/lib/tanstack-form/context";
import { useSelector } from "@tanstack/react-form";
import type { ComponentProps } from "react";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

type OtpFieldProps = Omit<
  ComponentProps<typeof Input>,
  "id" | "name" | "value" | "onChange" | "onBlur"
> & {
  label?: string;
  maxLength?: number;
};

export const OtpField = ({
  label,
  maxLength,
  ...inputProps
}: OtpFieldProps) => {
  // Restrict this reusable component to string fields.
  const field = useFieldContext<string>();
  const errors = useSelector(field?.store, (state) => state?.meta?.errors);
  const isInvalid = errors.length > 0;

  return (
    <Field data-invalid={isInvalid}>
      {label ? <FieldLabel htmlFor={field?.name}>{label}</FieldLabel> : null}

      <InputOTP
        {...inputProps}
        maxLength={maxLength ?? 6}
        id={field?.name}
        name={field?.name}
        value={field?.state.value}
        onBlur={field?.handleBlur}
        onChange={(value) => field?.handleChange(value)}
        aria-invalid={isInvalid}
      >
        <InputOTPGroup>
          {Array?.from({ length: maxLength ?? 0 })?.map((_, i) => (
            <InputOTPSlot
              key={`${field?.name}-${i}`}
              index={i}
            />
          ))}
        </InputOTPGroup>
      </InputOTP>

      {isInvalid ? <FieldError errors={errors} /> : null}
    </Field>
  );
};
