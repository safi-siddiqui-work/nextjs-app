import ModeToggleDropdown from "@/components/core/mode-toggle-dropdown";
import { FlexRow } from "@/components/shared/section";
import { HeadingThree } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import Link from "next/link";

export const GeneralHeader = () => {
  return (
    <header className="flex items-center justify-between border-b px-4 py-2">
      <Link
        href={"/"}
        // href={WebRoutes.home}
      >
        <HeadingThree>Safi Siddiqui</HeadingThree>
      </Link>

      <FlexRow className="gap-4">
        <Button
          nativeButton={false}
          size={"sm"}
          render={
            <Link
              href={"/"}
              //  href={WebRoutes?.auth?.signin?.home}
            >
              <LogInIcon />
              Sign In
            </Link>
          }
        />

        <ModeToggleDropdown />
      </FlexRow>
    </header>
  );
};
