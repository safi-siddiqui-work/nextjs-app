import { FlexCol } from "@/components/shared/section";
import { HeadingOne, HeadingThree } from "@/components/shared/typography";
import { InfoData } from "@/lib/constants/data/info";
import { SparklesIcon } from "lucide-react";

export const HomeHero = () => {
  return (
    <FlexCol className="items-center gap-4 py-16 text-center lg:py-20">
      <FlexCol className="max-w-md items-center gap-4 text-center lg:max-w-2xl">
        <SparklesIcon className="size-14" />
        <HeadingOne className="text-7xl md:text-9xl">
          {InfoData?.saas?.name}
        </HeadingOne>
        <HeadingThree className="md:text-4xl">
          {InfoData?.saas?.description}
        </HeadingThree>
      </FlexCol>
    </FlexCol>
  );
};
