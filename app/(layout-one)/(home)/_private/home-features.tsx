import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export const HomeFeatures = () => {
  const features = [
    {
      name: "CRM — Customer Relationship Management",
      description:
        "Tracks leads, prospects, customers, communications, sales activities, deals, and follow-ups.",
      outcome: "fewer lost opportunities and better sales conversion.",
    },
    {
      name: "Lead Generation & Prospecting Software",
      description:
        "Helps teams identify target companies, organize prospects, enrich business information, qualify leads, and manage prospecting campaigns.",
      outcome: "more qualified sales opportunities.",
    },
    {
      name: "Sales Engagement & Outreach Automation",
      description:
        "Manages personalized email sequences, follow-up tasks, replies, meeting booking, and campaign performance.",
      outcome: "less manual sales work and more consistent follow-up.",
    },
    {
      name: "Revenue Intelligence & Business Analytics",
      description:
        "Combines sales data, conversion rates, deal values, revenue forecasts, acquisition costs, and performance reports.",
      outcome: "better decisions about where to invest time and money.",
    },
    {
      name: "AI Workflow Automation",
      description:
        "Connects business systems and automatically performs tasks such as classifying leads, updating a CRM, summarizing calls, and triggering follow-ups.",
      outcome: "lower operating costs and less repetitive work.",
    },
    {
      name: "AI Customer Support & Customer Success Software",
      description:
        "Uses company knowledge bases, ticket history, and approved integrations to answer questions, route tickets, and identify customers who need attention.",
      outcome: "faster support and better customer retention.",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {features?.map((feature, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{feature?.name}</CardTitle>
            <CardDescription>{feature?.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">
              Business Outcome: {feature?.outcome}
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/">
              <Button>Get Started</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
