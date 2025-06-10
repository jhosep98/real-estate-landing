"use client";

import * as React from "react";
import { CTAWidget } from "@wulperstudio/cta";

export const ClientCtaWidgetAbout: React.FC = () => {
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
      preference="cb3962c9-d32c-41e2-aa67-39e76fae779f"
      mode="test"
      id_handler="cta_handler"
      testHost={"https://real-estate-landing-tau.vercel.app/"}
      // testHost={"https://real-estate-landing-tau.vercel.app/"}
    />
  );
};
