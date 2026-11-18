import { FlexCol } from "@/components/shared/section";
import { HeadingTwo, Paragraph } from "@/components/shared/typography";
import { SignupEmailCreate } from "./_private/component";

export default function Page() {
  return (
    <FlexCol className="gap-6">
      <FlexCol className="">
        <HeadingTwo>Create Account</HeadingTwo>
        <Paragraph>Enter your credentials</Paragraph>
      </FlexCol>

      <SignupEmailCreate />
    </FlexCol>
  );
}
