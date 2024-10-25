"use client";

import * as React from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

export type TitleProps = TypographyProps<"p", {}>;

export const TitleChart = React.forwardRef<HTMLParagraphElement, TitleProps>(
  (props, ref) => {
    const { children, ...other } = props;
    return (
      <Typography ref={ref} fontWeight={500} fontSize="18px" {...other}>
        {children}
      </Typography>
    );
  }
);

TitleChart.displayName = "TitleChart";
