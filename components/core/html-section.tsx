// "use client";

import { getThemeCookie } from "@/lib/cookies/theme";
import { cn } from "cn";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default async function HtmlSection({
  children,
}: {
  children: ReactNode;
}) {
  const themeCookie = await getThemeCookie();

  // query client can't be used over html section
  // const { appThemeServer } = useAppTheme();

  // if (!appThemeServer) {
  //   return (
  //     <html
  //       suppressHydrationWarning
  //       className={cn(
  //         inter.variable,
  //         "h-full scroll-smooth font-sans antialiased",
  //       )}
  //     >
  //       {children}
  //     </html>
  //   );
  // }

  // Server component only
  // const theme = await getThemeCookie();

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn(
        inter.variable,
        "h-full scroll-smooth font-sans antialiased",
        // appThemeServer,
        themeCookie,
      )}
      style={{
        // colorScheme: appThemeServer,
        colorScheme: themeCookie,
      }}
    >
      {children}
    </html>
  );
}
