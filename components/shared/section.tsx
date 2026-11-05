import { cn } from "cn";
import { ComponentProps } from "react";

export const FlexCol = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => (
  <div
    className={cn("flex flex-col", className)}
    {...props}
  >
    {children}
  </div>
);

export const FlexRow = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => (
  <div
    className={cn("flex flex-row items-center", className)}
    {...props}
  >
    {children}
  </div>
);
