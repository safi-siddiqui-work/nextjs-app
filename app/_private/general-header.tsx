import ModeToggleDropdown from "@/components/core/mode-toggle-dropdown";
import { FlexRow } from "@/components/shared/section";
import { ShadcnButtonLink } from "@/components/shared/shadcn";
import { HeadingThree } from "@/components/shared/typography";
import { InfoData } from "@/lib/constants/data/info";
import { WebRoutes } from "@/lib/constants/routes/web-routes";
import { LogInIcon } from "lucide-react";
import Link from "next/link";

export const GeneralHeader = () => {
  return (
    <header className="flex items-center justify-between border-b p-4">
      <Link href={WebRoutes.home}>
        <HeadingThree>{InfoData?.saas?.name}</HeadingThree>
      </Link>

      <FlexRow className="gap-4">
        <ShadcnButtonLink
          linkProps={{
            // href: WebRoutes?.auth?.signin?.home,
            href: WebRoutes?.home,
          }}
        >
          <LogInIcon />
          Sign In
        </ShadcnButtonLink>

        <ModeToggleDropdown />
      </FlexRow>
    </header>
  );
};
