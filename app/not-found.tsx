import { FlexCol, FlexRow } from "@/components/shared/section";
import { ShadcnButtonLink } from "@/components/shared/shadcn";
import { HeadingThree, Paragraph } from "@/components/shared/typography";
import { WebRoutes } from "@/lib/constants/routes/web-routes";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <FlexCol className="flex-1 items-center justify-center">
      <FlexRow className="gap-4 divide-x-2">
        <HeadingThree>404</HeadingThree>
        <div className="h-20" />
        <FlexCol>
          <Paragraph className="text-sm">
            This page could not be found.
          </Paragraph>
          <ShadcnButtonLink
            linkProps={{
              href: WebRoutes?.home,
            }}
            buttonProps={{
              variant: "link",
            }}
          >
            Return Home
            <ArrowUpRight />
          </ShadcnButtonLink>
        </FlexCol>
      </FlexRow>
    </FlexCol>
  );
}
