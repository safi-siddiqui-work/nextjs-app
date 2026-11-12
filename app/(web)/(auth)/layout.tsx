import { FlexCol } from "@/components/shared/section";
import { Particles } from "@/components/ui/particles";
import { GeneralHeader } from "@/components/web/general/header";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <>
      <GeneralHeader />
      <FlexCol className="flex-1 items-center justify-center">
        <Particles className="absolute top-0 left-0 -z-50 h-full w-full" />
        {children}
      </FlexCol>
    </>
  );
}
