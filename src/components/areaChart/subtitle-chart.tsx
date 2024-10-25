"use client";

import * as React from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

export type SubtitleProps = TypographyProps<"p", {}>;

export const SubtitleChart = React.forwardRef<
  HTMLParagraphElement,
  SubtitleProps
>((props, ref) => {
  const { children, ...other } = props;
  return (
    <Typography
      ref={ref}
      fontWeight={400}
      variant="body1"
      color="text.secondary"
      {...other}
    >
      {children}
    </Typography>
  );
});

SubtitleChart.displayName = "SubtitleChart";
