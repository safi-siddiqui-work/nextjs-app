import Link from "next/link";
import { ComponentProps, ReactNode } from "react";
import { Button } from "../ui/button";
import { toast } from "../ui/toast";

export const ShadcnToast = ({
  title,
  description,
  type = "success",
}: {
  title?: string;
  description?: string;
  type?: "default" | "success" | "info" | "warning" | "error";
}) =>
  toast?.add({
    title,
    description,
    type,
  });

export const ShadcnButtonLink = ({
  buttonProps,
  linkProps,
  children,
}: {
  buttonProps?: ComponentProps<typeof Button>;
  linkProps?: ComponentProps<typeof Link>;
  children?: ReactNode;
}) => {
  const {
    nativeButton: nativeButtonExtra,
    size: sizeExtra,
    ...buttonPropsExtra
  } = buttonProps ?? {};
  const { href: hrefExtra, ...linkPropsExtra } = linkProps ?? {};

  return (
    <Button
      nativeButton={nativeButtonExtra ?? false}
      size={sizeExtra ?? "sm"}
      {...buttonPropsExtra}
      render={
        <Link
          href={hrefExtra ?? "/"}
          {...linkPropsExtra}
        >
          {children}
        </Link>
      }
    />
  );
};
