"use client";

// import TanstackQueryClient from "@/lib/tanstack-query/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ComponentProps } from "react";

let browserQueryClient: QueryClient | undefined;

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus: false,
        // Keep reconnect refetching enabled by default.
        retry: 1,
      },
    },
  });
}

function getQueryClient() {
  // Keep server requests isolated and preserve the browser cache across renders.
  if (typeof window === "undefined") return makeQueryClient();
  browserQueryClient ??= makeQueryClient();
  return browserQueryClient;
}

export default function TanstackQueryProvider({
  children,
  // ...props
}: ComponentProps<"div">) {
  // const [queryClient] = useState(
  //   () =>
  //     new QueryClient({
  //       defaultOptions: {
  //         queries: {
  //           // staleTime: Infinity,
  //           staleTime: 1000 * 60 * 5, // Data stays fresh for 5 minutes
  //           refetchOnWindowFocus: false,
  //           refetchOnReconnect: false,
  //           retry: false,
  //         },
  //       },
  //     }),
  // );

  return (
    <QueryClientProvider
      //   {...props}
      client={getQueryClient()}
    >
      {children}
    </QueryClientProvider>
  );
}
