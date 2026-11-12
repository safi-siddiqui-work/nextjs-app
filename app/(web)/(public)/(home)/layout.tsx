import { Particles } from "@/components/ui/particles";
import { GeneralFooter } from "@/components/web/general/footer";
import { GeneralHeader } from "@/components/web/general/header";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <>
      <GeneralHeader />
      <Particles className="absolute top-0 left-0 -z-50 h-full w-full" />
      {children}
      <GeneralFooter />
    </>
  );
}
