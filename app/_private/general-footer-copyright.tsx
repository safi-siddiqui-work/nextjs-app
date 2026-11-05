"use client";

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
    <div className="flex">
      <CopyrightIcon />
      <p className="ml-2 text-sm">{year} SAFI SIDDIQUI. All rights reserved.</p>
    </div>
  );
};
