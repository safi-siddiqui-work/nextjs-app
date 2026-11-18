import { FlexCol } from "@/components/shared/section";
import { ShadcnButtonLink } from "@/components/shared/shadcn";
import { HeadingTwo } from "@/components/shared/typography";
import { WebRoutes } from "@/lib/constants/routes/web-routes";
import { LockIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export default function Page() {
  return (
    <FlexCol className="gap-6">
      <FlexCol className="">
        <HeadingTwo>Sign In</HeadingTwo>
        <Link href={WebRoutes?.auth?.signup?.home}>
          Create a new account? Sign Up
        </Link>
      </FlexCol>

      <FlexCol className="gap-2">
        <ShadcnButtonLink
          linkProps={{
            href: WebRoutes?.auth?.signin?.email,
          }}
        >
          <MailIcon />
          Continue using email
        </ShadcnButtonLink>
        <ShadcnButtonLink
          linkProps={{
            href: WebRoutes?.auth?.signin?.passwordless?.home,
          }}
        >
          <LockIcon />
          Continue using passwordless
        </ShadcnButtonLink>
      </FlexCol>
      <FlexCol className="gap-2">
        <ShadcnButtonLink
          linkProps={{
            href: "#",
          }}
          buttonProps={{
            variant: "outline",
          }}
        >
          <FaGoogle />
          Continue using Google
        </ShadcnButtonLink>
      </FlexCol>
    </FlexCol>
  );
}
