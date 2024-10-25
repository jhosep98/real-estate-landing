import * as React from "react";
import Box from "@mui/material/Box";
import { SxProps, Theme, useMediaQuery, useTheme, styled } from "@mui/material";

import {
  AreaChartModel,
  TitleProps,
  SubtitleProps,
  TitleChart,
  SubtitleChart,
  AreaChart,
} from "@/components";

export const CardChart = styled("div")(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
}));

interface AreaChartBlockModel extends AreaChartModel {
  aspectRatio?: string;
  title?: string;
  description?: string;
  sx?: SxProps<Theme>;
  titleProps?: TitleProps;
  subTitleProps?: SubtitleProps;
}

export const AreaChartBlock: React.FC<AreaChartBlockModel> = ({
  aspectRatio,
  title,
  description,
  sx,
  titleProps,
  subTitleProps,
  ...props
}) => {
  const theme = useTheme();
  const isMqMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <CardChart
      sx={{
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        p: 0,
        border: "unset",
        borderRadius: 0,
        // aspectRatio: isMqMd ? "1/1" : aspectRatio || "16/9",
        // maxHeight: 520,
        // width: "100%",
        // minHeight: 520,
        ...sx,
      }}
    >
      {title && <TitleChart {...titleProps}>{title}</TitleChart>}

      {description && (
        <SubtitleChart {...subTitleProps}>{description}</SubtitleChart>
      )}

      <Box
        sx={{
          ...((title || description) && { paddingTop: "1rem" }),
          width: "100%",
          flex: 1,
          position: "relative",
          overflow: "hidden",
          minHeight: 520,
          display: 'flex',
          flexDirection: 'column',
          '& .recharts-responsive-container': {
            height: '--webkit-fill-available',
            flex: 1,
          }
        }}
      >
        <AreaChart {...props} />
      </Box>
    </CardChart>
  );
};
