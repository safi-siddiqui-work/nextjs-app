import { FlexCol } from "@/components/shared/section";
import { HeadingTwo } from "@/components/shared/typography";
import { PlaceholderData } from "@/lib/constants/data/placeholder";
import { MvempRoutes } from "@/lib/constants/routes/mvemp-routes";
import Link from "next/link";
import { MvempSignupEmail } from "./_private/component";

export default function Page() {
  return (
    <FlexCol className="gap-6">
      <FlexCol className="">
        <HeadingTwo>{PlaceholderData?.auth?.signup?.name}</HeadingTwo>
        <Link href={MvempRoutes?.auth?.signin?.home}>
          {PlaceholderData?.auth?.signup?.linkText}
        </Link>
      </FlexCol>

      <MvempSignupEmail />
    </FlexCol>
  );
}
