import { FlexCol, FlexRow } from "@/components/shared/section";
import { ShadcnButtonLink } from "@/components/shared/shadcn";
import { HeadingThree, Paragraph } from "@/components/shared/typography";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { InfoData } from "@/lib/constants/data/info";
import { ArrowUpRightIcon, Layers2Icon, SparklesIcon } from "lucide-react";
import { FaGithub, FaLinkedin, FaNodeJs, FaWhatsapp } from "react-icons/fa";
import {
  SiGmail,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiUpwork,
} from "react-icons/si";
import { GeneralFooterCopyright } from "./general-footer-copyright";

export const GeneralFooter = () => {
  const techSkills = [
    {
      icon: Layers2Icon,
      title: "Full Stack SaaS",
    },
    {
      icon: SparklesIcon,
      title: "AI Engineer",
    },
    {
      icon: SiNextdotjs,
      title: "Next.js",
    },
    {
      icon: SiNestjs,
      title: "NestJS",
    },
    {
      icon: SiReact,
      title: "React",
    },
    {
      icon: FaNodeJs,
      title: "NodeJS",
    },
    {
      icon: SiTypescript,
      title: "TypeScript",
    },
    {
      icon: SiJavascript,
      title: "JavaScript",
    },
    {
      icon: SiTailwindcss,
      title: "Tailwind Css",
    },
    {
      icon: SiShadcnui,
      title: "Shadcn UI",
    },
  ];

  const links = [
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/safi-siddiqui-work",
    },
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/safi-siddiqui-work",
    },
    {
      icon: SiGmail,
      name: "Gmail",
      url: "mailto:safi.siddiqui.work@gmail.com",
    },
    {
      icon: SiUpwork,
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/~01d057b3173e1e2c63",
    },
    {
      icon: FaWhatsapp,
      name: "WhatsApp",
      url: "https://wa.me/00923117737230",
    },
  ];

  return (
    <FlexCol className="gap-6 px-4 py-12">
      <FlexRow className="flex-wrap gap-4">
        <Avatar className="size-20">
          <AvatarImage
            src={InfoData?.profile?.avatar}
            alt="SAFI"
          />
        </Avatar>

        <FlexCol>
          <HeadingThree>{InfoData?.profile?.name}</HeadingThree>
          <Paragraph>{InfoData?.profile?.headline}</Paragraph>
        </FlexCol>
      </FlexRow>

      <div className="flex flex-wrap items-center gap-2">
        {links?.map((a, index) => (
          <ShadcnButtonLink
            key={index}
            linkProps={{
              href: a?.url,
              target: "_blank",
              rel: "noopener noreferrer",
            }}
            buttonProps={{
              size: "default",
            }}
          >
            <a.icon className="" />
            {a?.name}
            <ArrowUpRightIcon />
          </ShadcnButtonLink>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {techSkills?.map((a) => (
          <Button
            key={a?.title}
            size={"lg"}
            variant={"outline"}
          >
            <a.icon className="" />
            {a?.title}
          </Button>
        ))}
      </div>

      <GeneralFooterCopyright />
    </FlexCol>
  );
};
