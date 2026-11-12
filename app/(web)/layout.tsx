import { FlexCol } from "@/components/shared/section";

export default function Layout({ children }: LayoutProps<"/">) {
  return <FlexCol className="flex-1">{children}</FlexCol>;
}
