import { FlexCol } from "@/components/shared/section";
import { HeadingTwo, Paragraph } from "@/components/shared/typography";
import { SignupEmailVerify } from "./_private/component";

export default function Page() {
  return (
    <FlexCol className="gap-6">
      <FlexCol className="">
        <HeadingTwo>Verify Otp</HeadingTwo>
        <Paragraph>Enter your one-time password</Paragraph>
      </FlexCol>

      <SignupEmailVerify />
    </FlexCol>
  );
}
