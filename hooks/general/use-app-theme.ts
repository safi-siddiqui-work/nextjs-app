"use client";

import { getThemeCookie, setThemeCookie } from "@/lib/cookies/theme";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

type ThemeType = "dark" | "light" | "system";

export default function useAppTheme() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [appThemeServer, setAppThemeServer] = useState<string | undefined>(
    undefined,
  );

  const setAppTheme = useCallback(
    async (th: ThemeType) => {
      // system also comes from server when them-provider gives undefined for alls value theme, systemTheme
      // so use the hook in any comopnent used insde the theme to set headers
      // instead of setting system on header, bcz theme provider resolves to dark or light only
      if (th == "system") {
        if (systemTheme) {
          await setThemeCookie(systemTheme);
          setTheme(systemTheme);
        }
      } else {
        await setThemeCookie(th);
        setTheme(th);
      }
    },
    [setTheme, systemTheme],
  );

  useEffect(() => {
    getThemeCookie()?.then((res) => {
      setAppThemeServer(res);
      if (!res) {
        setAppTheme("system");
      }
    });
  }, [setAppTheme]);

  return {
    theme,
    appThemeServer,
    setAppTheme,
  };
}
