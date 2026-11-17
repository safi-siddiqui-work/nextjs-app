import { FlexCol } from "@/components/shared/section";
import { ReactNode } from "react";

export const AuthLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <FlexCol className="flex-1 items-center justify-center p-4">
      <FlexCol className="w-full max-w-lg">{children}</FlexCol>
    </FlexCol>
  );
};
