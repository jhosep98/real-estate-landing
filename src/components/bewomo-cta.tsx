"use client";

import * as React from "react";
import { CTAWidget } from "@wulperstudio/cta";

export const BewomoCta: React.FC = () => {
  return (
    <CTAWidget
      preference="81fab0d1-6542-43db-8af7-8fd41e868dd7"
      mode="production"
      id_handler="cta_handler"
      // testHost="https://real-estate-landing-tau.vercel.app/"
    />
  );
};
