import { FlexCol, FlexRow } from "@/components/shared/section";
import { HeadingTwo, Paragraph } from "@/components/shared/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InfoData } from "@/lib/constants/data/info";
import Link from "next/link";

export const HomeFeatures = () => {
  return (
    <FlexCol className="gap-8">
      <FlexCol>
        <HeadingTwo>Features</HeadingTwo>
        <Paragraph>
          All business application services, supported by one Big SaaS platform.
        </Paragraph>
      </FlexCol>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-4">
        {InfoData?.saasFeatures?.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              {feature?.icon && <feature.icon className="size-20" />}
              <CardTitle>{feature?.name}</CardTitle>
              <CardDescription>{feature?.purpose}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <FlexRow className="flex-wrap gap-2">
                <p className="font-semibold">Industry:</p>
                {feature?.industry?.map((item, index) => (
                  <Badge key={item + index}>{item}</Badge>
                ))}
              </FlexRow>
            </CardContent>
            <CardFooter>
              <Link href="/">
                <Button>Get Started</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </FlexCol>
  );
};
