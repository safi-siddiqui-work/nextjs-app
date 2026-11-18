import { FlexCol } from "@/components/shared/section";
import { HeadingTwo } from "@/components/shared/typography";
import { WebRoutes } from "@/lib/constants/routes/web-routes";
import Link from "next/link";
import { SigninEmailPassword } from "./_private/component";

export default function Page() {
  return (
    <FlexCol className="gap-6">
      <FlexCol className="">
        <HeadingTwo>Sign In</HeadingTwo>
        <Link href={WebRoutes?.auth?.signin?.home}>
          Alternate way to login? Go Back
        </Link>
      </FlexCol>

      <SigninEmailPassword />
    </FlexCol>
  );
}
