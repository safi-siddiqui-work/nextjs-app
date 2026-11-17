import { AuthLayout } from "@/components/web/auth/layout";

export default function Layout({ children }: LayoutProps<"/">) {
  return <AuthLayout>{children}</AuthLayout>;
}
