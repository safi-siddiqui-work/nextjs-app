import { toast } from "../ui/toast";

export const ShadcnToast = ({
  title,
  description,
  type = "success",
}: {
  title?: string;
  description?: string;
  type?: "default" | "success" | "info" | "warning" | "error";
}) =>
  toast?.add({
    title,
    description,
    type,
  });
