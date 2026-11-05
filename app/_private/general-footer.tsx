import { Button } from "@/components/ui/button";
import {
  BoxIcon,
  DollarSignIcon,
  HandCoinsIcon,
  Layers2Icon,
  SparklesIcon,
} from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {
  SiGmail,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiUpwork,
} from "react-icons/si";
import { GeneralFooterCopyright } from "./general-footer-copyright";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const GeneralFooter = () => {
  const techSkills = [
    {
      icon: SiNextdotjs,
      title: "Next.js",
    },
    {
      icon: Layers2Icon,
      title: "Full Stack",
    },
    {
      icon: SparklesIcon,
      title: "AI Engineer",
    },
    {
      icon: SiReact,
      title: "React",
    },
    {
      icon: SiTypescript,
      title: "TypeScript",
    },
    {
      icon: SiJavascript,
      title: "JavaScript",
    },
  ];
  const salesSkills = [
    {
      icon: BoxIcon,
      title: "Software",
    },
    {
      icon: DollarSignIcon,
      title: "Sales",
    },
    {
      icon: HandCoinsIcon,
      title: "Business",
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
    <div className="flex flex-col items-center gap-6 px-4 py-12">
      <div className="flex flex-wrap items-center gap-4">
        <Avatar className="size-10">
          <AvatarImage
            src={"klasdlajsdkl"}
            // src={ConstantImages?.profileAvatar}
            alt="SAFI"
          />
        </Avatar>
        <h1 className="text-xl font-bold">SAFI SIDDIQUI</h1>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {links?.map((a, index) => (
          <Link
            key={index}
            href={a?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant={"outline"}
              className="flex items-center gap-2"
            >
              <a.icon className="" />
              {a?.name}
            </Button>
          </Link>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {salesSkills?.map((a) => (
          <Button
            key={a?.title}
            size={"lg"}
            // variant={"secondary"}
          >
            <a.icon className="" />
            {a?.title}
          </Button>
        ))}

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
    </div>
  );
};
