import * as React from "react";
import { styled } from "@mui/material";
import { SxProps, Theme, useMediaQuery, useTheme } from "@mui/material";

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
        aspectRatio: isMqMd ? "1/1" : aspectRatio || "16/9",
        maxHeight: 620,
        px: 1,
        "& > div > div > .custom-recharts": {
          maxWidth: 974,
          width: "100% !important",
        },
        display: "flex",
        flexDirection: "column",
        ...sx,
      }}
    >
      {title && <TitleChart {...titleProps}>{title}</TitleChart>}

      {description && (
        <SubtitleChart {...subTitleProps}>{description}</SubtitleChart>
      )}

      <div
        style={{
          ...((title || description) && { paddingTop: "1rem" }),
          width: "100%",
          flex: 1,
        }}
      >
        <AreaChart {...props} />
      </div>
    </CardChart>
  );
};
