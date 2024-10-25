"use client";

import * as React from "react";
import { useTheme } from "@mui/material";
import { CardFlexible, CardFlexModel } from "@wulperstudio/cms";

export interface ContainerCardModel extends CardFlexModel {}

export const ContainerCard: React.FC<ContainerCardModel> = ({
  children,
  ...props
}) => {
  const theme = useTheme();
  const { sx, ...rest } = props;

  return (
    <CardFlexible
      shadow="none"
      border={`1px solid ${theme.palette.divider}`}
      padding="1rem"
      sx={{
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
        backgroundColor: theme.palette.background.default,
        "&:hover": {
          boxShadow: theme.shadows[1],
          cursor: "pointer",
          backgroundColor: theme.palette.background.default,
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </CardFlexible>
  );
};
