"use client";

import * as React from "react";
import dayjs from "dayjs";
import Container from "@mui/material/Container";

import { formatNumber } from "@/helpers";
import { AreaChartBlock } from "./area-chart-block";

export const MainBlocks: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <AreaChartBlock
        titleProps={{
          sx: {
            pl: ".5rem",
          },
        }}
        data={[
          {
            profit: 1000,
            date: "2023",
          },
          {
            profit: 2000,
            date: "2024",
          },
          {
            profit: 3000,
            date: "2025",
          },
        ]}
        xAxisKey="date"
        categories={["profit"]}
        curveType="monotone"
        title="Annual Profit"
        colors={["rgb(99 102 241)"]}
        filterCenterXTick={(value) => Number(value) === dayjs().year()}
        filterCrossValue={(value) =>
          Number(value?.payload?.date) === dayjs().year()
        }
        YAxisProps={{
          tickFormatter: (value) => `$ ${formatNumber(value, 1)}`,
        }}
        showAxis
        showGrid
        showLegend
        showGradient
      />
    </Container>
  );
};
