import { FlexCol } from "@/components/shared/section";
import { HeadingTwo } from "@/components/shared/typography";
import { WebRoutes } from "@/lib/constants/routes/web-routes";
import Link from "next/link";
import { SignupEmail } from "./_private/component";

export default function Page() {
  return (
    <FlexCol className="gap-6">
      <FlexCol className="">
        <HeadingTwo>Sign Up</HeadingTwo>
        <Link href={WebRoutes?.auth?.signin?.home}>
          Already have an account? Sign In
        </Link>
      </FlexCol>

      <SignupEmail />
    </FlexCol>
  );
}
