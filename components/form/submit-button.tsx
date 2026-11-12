"use client";

import { useFormContext } from "@/lib/tanstack-form/context";
import { ComponentProps, ElementType } from "react";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

type SubmitButtonProps = Omit<
  ComponentProps<typeof Button>,
  "type" | "disabled" | "aria-disabled"
> & {
  icon?: ElementType;
};

export function SubmitButton({
  children = "Submit",
  icon: Icon,
}: SubmitButtonProps) {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
      {([canSubmit, isSubmitting]) => (
        <Button
          type="submit"
          disabled={!canSubmit || isSubmitting}
          aria-disabled={!canSubmit || isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Spinner />
              Subitting
            </>
          ) : (
            <>
              {Icon && <Icon />}
              {children}
            </>
          )}
        </Button>
      )}
    </form.Subscribe>
  );
}
