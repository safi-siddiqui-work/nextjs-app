import { FlexCol } from "@/components/shared/section";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BotIcon,
  ChartNoAxesCombinedIcon,
  CreditCardIcon,
  GitBranchIcon,
  TargetIcon,
  WorkflowIcon,
} from "lucide-react";

export const HomeVision = () => {
  const visions = [
    {
      icon: TargetIcon,
      name: "Lead intelligence",
      description: "Prospect records, enrichment, qualification, scoring",
    },
    {
      icon: GitBranchIcon,
      name: "Sales CRM",
      description: "Contacts, companies, deals, pipeline, tasks",
    },
    {
      icon: BotIcon,
      name: "AI sales copilot",
      description: "Research, drafting, summaries, next-best actions",
    },
    {
      icon: WorkflowIcon,
      name: "Workflow automation",
      description: "Triggers, integrations, approvals, follow-up tasks",
    },
    {
      icon: ChartNoAxesCombinedIcon,
      name: "Revenue analytics",
      description: "Conversion, forecast, revenue, campaign ROI",
    },
    {
      icon: CreditCardIcon,
      name: "SaaS billing",
      description: "Plans, subscriptions, usage limits, payments",
    },
  ];

  return (
    <FlexCol className="gap-8">
      <FlexCol className="items-center">
        <FlexCol className="max-w-md gap-2 text-center lg:max-w-xl">
          <h2 className="text-3xl font-medium">Our Vision</h2>

          <p className="">
            An AI-powered revenue operations and sales automation platform for
            B2B businesses.
          </p>

          <p className="">
            A central workspace that helps a company turn prospects into paying
            customers, automate repetitive sales operations, understand its
            pipeline, and identify opportunities to grow revenue.
          </p>

          <p className="italic">
            The core business promise: help businesses manage their sales
            process more efficiently and make better decisions using AI and
            data.
          </p>
        </FlexCol>
      </FlexCol>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {visions?.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <feature.icon className="h-6 w-6" />
              <CardTitle>{feature?.name}</CardTitle>
              <CardDescription>{feature?.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </FlexCol>
  );
};
