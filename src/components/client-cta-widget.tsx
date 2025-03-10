"use client";

import * as React from "react";
import { CTAWidget } from "@wulperstudio/cta";

export const ClientCtaWidget: React.FC = () => {
  const [host, setHost] = React.useState<string>(
    "https://real-estate-landing-tau.vercel.app/"
  );

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setHost(window?.location?.href);
    }
  }, []);

  return (
    <CTAWidget
      preference="1b03ba0a-a585-4fce-8ffd-4f4d70a33fb5"
      mode="test"
      id_handler="cta_handler"
      testHost={host ?? "https://real-estate-landing-tau.vercel.app/"}
      // testHost={"https://real-estate-landing-tau.vercel.app/"}
    />
  );
};
