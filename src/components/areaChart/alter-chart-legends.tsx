"use client";

import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";

import { useOnWindowResize } from "@/hooks";

export interface LegendItemProps {
  name: string;
  color: string;
  onClickItem?: (name: string) => void;
}

const LegendItem = ({ name, color, onClickItem }: LegendItemProps) => (
  <Box
    component="li"
    onClick={() => onClickItem?.(name)}
    sx={{
      display: "inline-flex",
      alignItems: "center",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      mr: 1.25,
      cursor: "pointer",
    }}
  >
    <Box
      component="svg"
      sx={{
        flex: "none",
        color,
        width: (theme) => theme.spacing(1),
        height: (theme) => theme.spacing(1),
        mr: 0.75,
      }}
      fill="currentColor"
      viewBox="0 0 8 8"
    >
      <circle cx={4} cy={4} r={4} />
    </Box>

    <Typography
      component="p"
      sx={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        textTransform: "capitalize",
      }}
      fontSize="14px"
      lineHeight="20px"
      fontWeight={400}
    >
      {name}
    </Typography>
  </Box>
);

export interface LegendProps extends React.OlHTMLAttributes<HTMLOListElement> {
  categories: string[];
  colors?: string[];
  onClickItem?: (name: string) => void;
}

const Legend = React.forwardRef<HTMLOListElement, LegendProps>((props, ref) => {
  const { categories, colors, onClickItem, ...other } = props;
  return (
    <Box
      component="ol"
      ref={ref}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        mb: 0,
      }}
      {...other}
    >
      {categories.map((category, idx) => (
        <LegendItem
          key={`item-${idx}`}
          name={category}
          color={colors?.[idx] || "gray"}
          onClickItem={onClickItem}
        />
      ))}
    </Box>
  );
});

Legend.displayName = "Legend";

export const AlterChartLegends = (
  { payload }: any,
  categoryColors: string[],
  setLegendHeight: React.Dispatch<React.SetStateAction<number>>,
  onClick?: (name: string) => void
) => {
  const legendRef = React.useRef<HTMLDivElement>(null);

  useOnWindowResize(() => {
    const calculateHeight = (height: number | undefined) =>
      height
        ? Number(height) + 20 // 20px extra padding
        : 60; // default height
    setLegendHeight(calculateHeight(legendRef.current?.clientHeight));
  });

  return (
    <Grid
      container
      ref={legendRef}
      alignItems="center"
      justifyContent="flex-end"
      sx={{ height: "fit-content" }}
    >
      <Legend
        categories={payload.map((entry: any) => entry.value)}
        colors={payload.map((entry: any, i: number) => categoryColors?.[i])}
        onClickItem={onClick}
      />
    </Grid>
  );
};
