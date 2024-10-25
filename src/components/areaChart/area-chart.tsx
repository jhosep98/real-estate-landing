"use client";

import * as React from "react";
import { styled } from "@mui/material";
import { StyledComponent } from "@emotion/styled";
import { CurveType } from "recharts/types/shape/Curve";
import { CategoricalChartProps } from "recharts/types/chart/generateCategoricalChart";
import {
  ResponsiveContainer,
  Tooltip,
  YAxis,
  YAxisProps,
  XAxis,
  XAxisProps,
  Area,
  AreaProps,
  Legend,
  CartesianGrid,
  CartesianGridProps,
  Text,
  AreaChart as RechartsAreaChart,
} from "recharts";

import { formatNumberSubfix } from "@/helpers";
import { AlterChartTooltip } from "./area-chart-tooltip";
import { AlterChartLegends } from "./alter-chart-legends";

export const CustomRechartsAreaChart: StyledComponent<CategoricalChartProps> =
  styled(RechartsAreaChart)(() => ({
    width: "100%",
    height: "100%",
    "& div.recharts-legend-wrapper": {
      height: "auto !important",
    },
  }));

export interface AreaChartModel {
  data: Array<any>;
  categories: Array<string>;
  colors: Array<string>;
  xAxisKey: string;

  AreaProps?: Omit<AreaProps, "dataKey" | "ref">;
  XAxisProps?: XAxisProps;
  YAxisProps?: YAxisProps;
  CartesianGridProps?: Omit<CartesianGridProps, "ref">;

  contentTooltip?: (props: any) => React.ReactNode;
  filterCrossValue?: (point: any) => boolean;
  filterCenterXTick?: (value: any) => boolean;

  stack?: boolean;
  connectNulls?: boolean;
  showLegend?: boolean;
  showGradient?: boolean;
  showGrid?: boolean;
  showAxis?: boolean;
  showAnimation?: boolean;
  curveType?: CurveType;
}

export const AreaChart = ({
  data,
  XAxisProps,
  YAxisProps,
  contentTooltip: ContentTooltip,
  AreaProps,
  categories,
  curveType,
  CartesianGridProps,
  filterCenterXTick,
  showGrid,
  showGradient,
  showLegend,
  showAxis,
  colors,
  stack,
  connectNulls,
  showAnimation,
  xAxisKey,
}: AreaChartModel) => {
  const [legendHeight, setLegendHeight] = React.useState(60);
  const [activeAreas, setActiveAreas] = React.useState<{
    [key: string]: boolean;
  }>(categories.reduce((acc, cur) => ({ ...acc, [cur]: true }), {}));

  return (
    <ResponsiveContainer height="100%" width="100%">
      <CustomRechartsAreaChart
        data={data}
        className="custom-recharts"
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        {showLegend && (
          <Legend
            verticalAlign="bottom"
            align="right"
            height={legendHeight}
            content={({ payload }) =>
              AlterChartLegends(
                { payload },
                colors,
                setLegendHeight,
                (key: string) =>
                  setActiveAreas((prev) => ({
                    ...prev,
                    [key]: !prev[key],
                  }))
              )
            }
          />
        )}

        {showAxis && (
          <>
            <XAxis
              dataKey={xAxisKey}
              stroke="rgba(0,0,0,0)"
              tickMargin={10}
              tickLine={false}
              axisLine={false}
              padding={{ left: 10, right: 10 }}
              minTickGap={5}
              tick={(e: any) => {
                const {
                  payload: { value },
                } = e;
                const props = {
                  ...e,
                  fontSize: 12,
                  fontFamily: "inherit",
                  fill: "#666",
                  fontWeight: filterCenterXTick?.(value) ? "700" : "400",
                };

                return <Text {...props}>{value}</Text>;
              }}
              {...XAxisProps}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tickCount={5}
              tick={{
                fontSize: 12,
                fill: "#666",
                transform: "translate(-5, 0)",
              }}
              padding={{ top: 0, bottom: 0 }}
              stroke="rgba(0,0,0,0)"
              width={60}
              {...YAxisProps}
            />
          </>
        )}

        {showGrid && (
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            {...CartesianGridProps}
          />
        )}

        {ContentTooltip ? (
          <Tooltip
            content={ContentTooltip}
            wrapperStyle={{
              outline: "none",
            }}
            position={{ y: 0 }}
          />
        ) : (
          <Tooltip
            content={(props) => (
              <AlterChartTooltip
                active={props.active}
                payload={props.payload}
                label="Values"
                valueFormatter={formatNumberSubfix}
                categoryColors={colors}
              />
            )}
            wrapperStyle={{
              outline: "none",
            }}
            position={{ y: 0 }}
          />
        )}

        {categories.map((category, idx) => (
          <Area
            key={category}
            dataKey={category}
            name={category}
            stroke={colors?.[idx] ?? "gray"}
            fill={`url(#${category}_fill_pattern)`}
            strokeWidth={2}
            dot={false}
            type={curveType}
            opacity={activeAreas[category] ? 1 : 0}
            stackId={stack ? "a" : undefined}
            connectNulls={connectNulls}
            isAnimationActive={showAnimation}
            {...AreaProps}
          />
        ))}

        {categories.map((category, idx) => {
          const hexColor = colors?.[idx] ?? "gray";

          return (
            <defs key={category}>
              {showGradient ? (
                <linearGradient
                  id={`${category}_fill_pattern`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor={hexColor} stopOpacity={0.4} />
                  <stop offset="95%" stopColor={hexColor} stopOpacity={0} />
                </linearGradient>
              ) : (
                <linearGradient
                  id={`${category}_fill_pattern`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop stopColor={hexColor} stopOpacity={0.3} />
                </linearGradient>
              )}
            </defs>
          );
        })}
      </CustomRechartsAreaChart>
    </ResponsiveContainer>
  );
};
