import { FlexCol } from "@/components/shared/section";
import { GeneralFooter } from "../_private/general-footer";
import { GeneralHeader } from "../_private/general-header";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <>
      <GeneralHeader />
      <FlexCol className="flex-1">{children}</FlexCol>
      <GeneralFooter />
    </>
  );
}
