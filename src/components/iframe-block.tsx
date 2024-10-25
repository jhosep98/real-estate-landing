"use client";

import * as React from "react";
import { useTheme } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import { BlockIframeMedia, BloqBoxMediaModel } from "@wulperstudio/cms";

export interface BlockIframeModel {
  src: string;
  containerProps?: BoxProps;
  contentProps?: BoxProps;
  iframeProps?: Omit<BloqBoxMediaModel, "src">;
}

export const BlockIframe: React.FC<BlockIframeModel> = ({
  src,
  containerProps,
  contentProps,
  iframeProps,
}) => {
  const theme = useTheme();
  const { sx, ...restContainerProps } = containerProps || {};
  const { sx: sxContent, ...restContentProps } = contentProps || {};

  return (
    <Box
      sx={{
        maxWidth: "100%",
        padding: 0,
        position: "relative",
        width: "100%",
        margin: "auto",
        [theme.breakpoints.down("md")]: {
          minHeight: "315px",
        },
        ...sx,
      }}
      {...restContainerProps}
    >
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          [theme.breakpoints.down("md")]: {
            minHeight: "315px",
          },
          "&::before": {
            content: '" "',
            display: "block",
            paddingBottom: "56.25%",
          },

          "& iframe": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          },
          ...sxContent,
        }}
        {...restContentProps}
      >
        <BlockIframeMedia width="560" height="315" src={src} {...iframeProps} />
      </Box>
    </Box>
  );
};
