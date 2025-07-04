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
      preference="402a64c7-ec4e-46dc-b218-b4ca48470ebb" 
      mode="test"
      id_handler="cta_handler"
      testHost={"https://real-estate-landing-tau.vercel.app/"}
      // testHost={"https://real-estate-landing-tau.vercel.app/"}
    />
  );
};
