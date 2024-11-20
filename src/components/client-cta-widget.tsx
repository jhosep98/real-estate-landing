"use client";

import * as React from "react";
import { CTAWidget } from "@wulperstudio/cta";

export const ClientCtaWidget: React.FC = () => {
  const [host, setHost] = React.useState<string>("");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setHost(window?.location?.href);
    }
  }, []);

  return (
    <CTAWidget
      preference="81fab0d1-6542-43db-8af7-8fd41e868dd7"
      mode="test"
      id_handler="cta_handler"
      testHost={host ?? "https://real-estate-landing-tau.vercel.app/"}
    />
  );
};
