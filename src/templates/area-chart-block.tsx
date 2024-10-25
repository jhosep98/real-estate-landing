"use client";

import * as React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { Typography, useTheme } from "@mui/material";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

import { AutocompleteGeneric } from "@/types";
import { AreaChartBlock } from "../ui/area-chart-block";
import {
  AutocompleteController,
  ContainerBlockWebTemplate,
} from "@/components";
import { formatNumber, formatterCurrencyDollar } from "@/helpers";
import { useForm } from "react-hook-form";

dayjs.extend(LocalizedFormat);

type FormData = {
  buy: number;
  sell: number;
};

const PARSE_DATA = [
  {
    id: "1",
    name: "Close Presale",
    price: 120,
    date: "2020-10-25T17:12:24.204Z",
    parsePrice: "$120/m2",
    value: 1000,
  },
  {
    id: "2",
    name: "Preventa abierta",
    price: 200,
    date: "2021-10-25T17:12:24.204Z",
    parsePrice: "$200/m2",
    value: 2000,
  },
  {
    id: "3",
    name: "Investors(closed table)",
    price: 225,
    date: "2022-10-25T17:12:24.204Z",
    parsePrice: "$225/m2",
    value: 3000,
  },
  {
    id: "4",
    name: "Investors(abierta)",
    price: 250,
    date: "2023-10-25T17:12:24.204Z",
    parsePrice: "$250/m2",
    value: 4000,
  },
  {
    id: "5",
    name: "Owners",
    price: 275,
    date: "2024-10-25T17:12:24.204Z",
    parsePrice: "$275/m2",
    value: 5000,
  },
  {
    id: "6",
    name: "Propietarios",
    price: 300,
    date: "2025-10-25T17:12:24.204Z",
    parsePrice: "$300/m2",
    value: 6000,
  },
  {
    id: "7",
    name: "Propietarios",
    price: 325,
    date: "2025-10-25T17:12:24.204Z",
    parsePrice: "$325/m2",
    value: 7000,
  },
  {
    id: "8",
    name: "Land holders",
    price: 400,
    date: "2025-10-25T17:12:24.204Z",
    parsePrice: "$400/m2",
    value: 8000,
  },
];

export const AreaChartBlockTemplate: React.FC = () => {
  const theme = useTheme();
  const { control, watch } = useForm<FormData>({
    defaultValues: {
      buy: 0,
      sell: 0,
    }
  });

  const buy = watch("buy");
  const sell = watch("sell");

  const profitPorcentage = sell && buy ? `${(sell / buy) * 100}%` : "0%";

  return (
    <ContainerBlockWebTemplate>
      <div>
        <AreaChartBlock
          data={PARSE_DATA.map(({ date, value }) => ({
            profit: value,
            date: `${dayjs(new Date(date)).format("MMM. YYYY")}`,
          }))}
          xAxisKey="date"
          categories={["profit"]}
          curveType="monotone"
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
      </div>

      <Divider />

      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        flexWrap="wrap"
        sx={{
          marginInline: "auto",
          width: "max-content",
          mb: "2rem",
          outline: `1px solid ${theme.palette.divider}`,
          borderRadius: 2,
          pr: "12px",
          mt: "2rem",
          "& div  div": {
            "&:hover": {
              boxShadow: "unset",
              filter: "unset",
            },
          },
        }}
      >
        <AutocompleteController
          disableClearable
          disableCloseOnSelect
          disablePortal
          control={control}
          name="buy"
          getOptionLabel={(option) => {
            return (option as AutocompleteGeneric<{ url: string }>).name;
          }}
          label="Compro a:"
          options={PARSE_DATA.map(({ id, name, parsePrice }) => ({
            id,
            name: `${name} - ${parsePrice}`,
          }))}
          variant="outlined"
          textFieldProps={{
            placeholder: "Selecciona una opción",
          }}
          sx={{
            width: 320,
          }}
        />
        <Divider orientation="vertical" flexItem />
        <AutocompleteController
          control={control}
          name="buy"
          disableClearable
          disableCloseOnSelect
          disablePortal
          getOptionLabel={(option) => {
            return (option as AutocompleteGeneric<{ url: string }>).name;
          }}
          label="Compro a:"
          options={PARSE_DATA.map(({ id, name, parsePrice }) => ({
            id,
            name: `${name} - ${parsePrice}`,
          }))}
          variant="outlined"
          sx={{
            width: 320,
          }}
        />
        =
        <Typography variant="body1" fontWeight="bold">
          {profitPorcentage}
        </Typography>
      </Stack>

      <Stack gap="1rem" sx={{ marginInline: "auto" }}>
        {PARSE_DATA.map(({ date, id, name, price }) => (
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            key={id}
            sx={{ width: 620 }}
          >
            <Typography variant="body1" fontWeight="bold">{`${dayjs(
              new Date(date)
            ).format("MMM, YYYY")}`}</Typography>

            <Typography variant="body1">{name}</Typography>

            <Typography variant="body1" fontWeight="bold">
              {formatterCurrencyDollar.format(price)}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </ContainerBlockWebTemplate>
  );
};
