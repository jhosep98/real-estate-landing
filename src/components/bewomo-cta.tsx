"use client";

import * as React from "react";
import { CTAWidget } from "@wulperstudio/cta";

export const BewomoCta: React.FC = () => {
  console.log(window.location.href)

  return (
    <CTAWidget
      preference="81fab0d1-6542-43db-8af7-8fd41e868dd7"
      mode="test"
      id_handler="cta_handler"
      testHost={window.location.href}
    />
  );
};
