import {
  BotIcon,
  BuildingComplexIcon,
  FileTextIcon,
  HandshakeIcon,
  HeartPulseIcon,
  MonitorActivityIcon,
  ShoppingBagIcon,
  SmartphoneUserRoundIcon,
} from "lucide-react";

export const InfoData = {
  profile: {
    name: "Safi Siddiqui",
    avatar:
      "https://dk3lrirh8u.ufs.sh/f/vsiTyh23sGP8g6jlDcOEN2QjGdItPRv0TpAbYJchHweOCfkn",
    headline: "Full Stack SaaS & AI Engineer",
  },

  saas: {
    name: "SAFI",
    description: "World Of Applications",
  },

  saasFeatures: [
    {
      icon: HandshakeIcon,
      name: "CRM & Business Management",
      purpose:
        "A business can manage its customers, employees, sales processes, and daily activities from one application.",
      industry: [
        "General business",
        "agencies",
        "sales teams",
        "service companies",
      ],
    },
    {
      icon: FileTextIcon,
      name: "AI Document Intelligence",
      purpose:
        "Users upload documents, ask questions, retrieve information, and generate useful outputs using AI.",
      industry: [
        "Legal",
        "healthcare",
        "finance",
        "education",
        "general business",
      ],
    },
    {
      icon: BotIcon,
      name: "AI Agent & Workflow Automation",
      purpose:
        "Businesses automate repetitive tasks using workflows, AI agents, APIs and external integrations.",
      industry: ["Agencies", "healthcare", "e-commerce", "business operations"],
    },
    {
      icon: MonitorActivityIcon,
      name: "Revenue Growth & Marketing Automation",
      purpose:
        "Help businesses acquire customers, convert leads, retain customers and improve revenue.",
      industry: ["Agencies", "SaaS businesses", "e-commerce", "telehealth"],
    },
    {
      icon: BuildingComplexIcon,
      name: "Enterprise Operations & Project Management",
      purpose:
        "Manage internal business operations and complex team workflows.",
      industry: [
        "Software companies",
        "agencies",
        "healthcare teams",
        "service businesses",
      ],
    },
    {
      icon: HeartPulseIcon,
      name: "Healthcare & Practice Management",
      purpose:
        "Manage healthcare operations, patients, providers, appointments and clinical workflows.",
      industry: [
        "Healthcare",
        "dental clinics",
        "telehealth",
        "medical practices",
      ],
    },
    {
      icon: ShoppingBagIcon,
      name: "Commerce, POS & Membership Platform",
      purpose:
        "Manage POS & Ordering, E-commerce & Shopify Integration and Creator & Membership Commerce",
      industry: [
        "Retail",
        "hospitality",
        "restaurants",
        "creators and digital commerce",
      ],
    },
    {
      icon: SmartphoneUserRoundIcon,
      name: "AI Mobile & Customer Applications",
      purpose:
        "Demonstrate your ability to build public-facing mobile applications that use your SaaS backend.",
      industry: [
        "Consumer applications",
        "SaaS businesses",
        "tracking",
        "productivity and AI utilities",
      ],
    },
  ],
};
