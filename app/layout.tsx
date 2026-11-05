import HtmlSection from "@/components/core/html-section";
import ThemeProvider from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/toast";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAFI",
  description: "Built by SAFI SIDDIQUI",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <HtmlSection>
      <body className="relative flex min-h-full flex-col">
        {/* <Particles className="absolute top-0 -z-1 h-full w-full" /> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </HtmlSection>
  );
}
