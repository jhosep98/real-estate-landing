"use client";

import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";

export type ChartTooltipProps = {
  active: boolean | undefined;
  payload: any;
  label: string;
  categoryColors: string[];
  valueFormatter: (value: number) => string;
};

export const ChartTooltipFrame: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <Box
    sx={{
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "divider",
      boxShadow: 2,
      borderRadius: (theme) => theme.shape.borderRadius,
      fontSize: "0.75rem",
      backgroundColor: "background.default",
    }}
  >
    {children}
  </Box>
);

export type ChartTooltipRowProps = {
  value: string;
  name: string;
  color: string;
};

export const ChartTooltipRow = ({
  value,
  name,
  color,
}: ChartTooltipRowProps) => (
  <Grid
    container
    alignItems="center"
    justifyContent="space-between"
    flexWrap="nowrap"
    columnGap={1}
    minWidth={200}
  >
    <Grid container columnGap={1} alignItems="center">
      <Typography
        component="span"
        variant="body2"
        sx={{
          flexShrink: 0,
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "divider",
          height: (theme) => theme.spacing(1.5),
          width: (theme) => theme.spacing(1.5),
          borderRadius: "9999px",
          boxShadow: 1,
          backgroundColor: color,
        }}
      />
      <Typography
        variant="body2"
        fontWeight={500}
        sx={{
          fontVariantNumeric: "tabular-nums",
          textAlign: "right",
          whiteSpace: "nowrap",
        }}
      >
        {value}
      </Typography>
    </Grid>

    <Typography
      variant="body2"
      fontWeight={400}
      sx={{
        textAlign: "right",
        whiteSpace: "nowrap",
        textTransform: "capitalize",
      }}
    >
      {name}
    </Typography>
  </Grid>
);

export const AlterChartTooltip = ({
  active,
  payload,
  label,
  categoryColors,
  valueFormatter,
}: ChartTooltipProps) => {
  if (active && payload) {
    return (
      <ChartTooltipFrame>
        <Box
          sx={{
            px: 2,
            py: 2,
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography variant="body2" fontWeight="500">
            {label}
          </Typography>
        </Box>

        <Grid
          container
          direction="column"
          sx={{
            px: 2,
            pb: 2,
            mt: 0.5,
          }}
        >
          {payload.map(({ value, name }: any, idx: number) => (
            <ChartTooltipRow
              key={`id-${idx}`}
              value={
                Array.isArray(value)
                  ? valueFormatter(value?.[0] - value?.[1])
                  : valueFormatter(value)
              }
              name={name}
              color={categoryColors?.[idx] ?? "gray"}
            />
          ))}
        </Grid>
      </ChartTooltipFrame>
    );
  }
  return null;
};
