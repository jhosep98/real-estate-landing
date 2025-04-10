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
      preference="7a3c3f11-6e88-4191-af1b-1b6ae58a434b"
      mode="test"
      id_handler="cta_handler"
      // testHost={host ?? "https://real-estate-landing-tau.vercel.app/"}
      // testHost={"https://real-estate-landing-tau.vercel.app/"}
    />
  );
};
