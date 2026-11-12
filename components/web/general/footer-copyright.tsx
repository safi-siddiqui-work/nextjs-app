"use client";

import { FlexRow } from "@/components/shared/section";
import { format } from "date-fns";
import { CopyrightIcon } from "lucide-react";
import { startTransition, useEffect, useState } from "react";

export const GeneralFooterCopyright = () => {
  const [year, setYear] = useState("");
  useEffect(() => {
    startTransition(() => {
      setYear(format(new Date(), "yyyy"));
    });
  }, []);

  return (
    <FlexRow>
      <CopyrightIcon />
      <p className="ml-2 text-sm">{year} SAFI SIDDIQUI. All rights reserved.</p>
    </FlexRow>
  );
};
