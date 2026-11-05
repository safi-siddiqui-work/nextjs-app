import { cn } from "cn";
import { ComponentProps } from "react";

export const HeadingOne = ({
  className,
  children,
  ...props
}: ComponentProps<"h1">) => (
  <h1
    className={cn("text-6xl font-bold", className)}
    {...props}
  >
    {children}
  </h1>
);

export const HeadingTwo = ({
  className,
  children,
  ...props
}: ComponentProps<"h2">) => (
  <h2
    className={cn("text-4xl font-bold", className)}
    {...props}
  >
    {children}
  </h2>
);

export const HeadingThree = ({
  className,
  children,
  ...props
}: ComponentProps<"h3">) => (
  <h3
    className={cn("text-2xl font-bold", className)}
    {...props}
  >
    {children}
  </h3>
);

export const Paragraph = ({
  className,
  children,
  ...props
}: ComponentProps<"p">) => (
  <p
    className={cn("", className)}
    {...props}
  >
    {children}
  </p>
);
