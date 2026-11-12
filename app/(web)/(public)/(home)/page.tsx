import { FlexCol } from "@/components/shared/section";
import { HomeFeatures } from "./_private/home-features";
import { HomeHero } from "./_private/home-hero";

export default function Home() {
  return (
    <FlexCol className="gap-8 p-4">
      <HomeHero />
      <HomeFeatures />
      {/* <HomeVision /> */}
    </FlexCol>
  );
}
