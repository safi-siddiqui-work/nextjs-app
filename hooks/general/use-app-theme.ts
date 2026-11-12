"use client";

import { ConstantTanstackQuery } from "@/lib/constants/data/tanstack-query-keys";
import { getThemeCookie, setThemeCookie } from "@/lib/cookies/theme";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useTheme } from "next-themes";
import { useCallback, useEffect } from "react";

type ThemeType = "dark" | "light" | "system";

export default function useAppTheme() {
  const { theme, setTheme, systemTheme } = useTheme();
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: [ConstantTanstackQuery?.themeCookie],
    queryFn: () => {
      return getThemeCookie();
    },
    staleTime: 1000 * 60 * 24, // 1 day
  });

  const setAppTheme = useCallback(
    async (th: ThemeType) => {
      // system also comes from server when theme-provider gives undefined for alls value theme, systemTheme
      // so use the hook in any comopnent used insde the theme to set headers
      // instead of setting system on header, bcz theme provider resolves to dark or light only
      // but it will only run on client not server
      if (th == "system") {
        if (systemTheme) {
          await setThemeCookie(systemTheme);
          setTheme(systemTheme);
          queryClient?.invalidateQueries({
            queryKey: [ConstantTanstackQuery?.themeCookie],
          });
        }
      } else {
        await setThemeCookie(th);
        setTheme(th);
        queryClient?.invalidateQueries({
          queryKey: [ConstantTanstackQuery?.themeCookie],
        });
      }
    },
    [queryClient, setTheme, systemTheme],
  );

  useEffect(() => {
    if (!query?.isPending) {
      if (!query?.data) {
        setAppTheme("system");
      }
    }
  }, [query, setAppTheme]);

  // useEffect(() => {
  //   /**
  //    * fetch('/getThemeCookei)>........
  //    *
  //    */

  //   // getThemeCookie()?.then((res) => {
  //   getCachedThemeCookie()?.then((res) => {
  //     if (!res) {
  //       setAppTheme("system");
  //     }
  //   });
  // }, [setAppTheme]);

  return {
    theme,
    setAppTheme,
  };
}
