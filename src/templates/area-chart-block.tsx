"use client";

import * as React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { TagTitleDescription } from "@wulperstudio/cms";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

import { AutocompleteGeneric } from "@/types";
import { AreaChartBlock } from "../ui/area-chart-block";
import { formatNumber, formatterCurrencyDollar } from "@/helpers";
import {
  AutocompleteController,
  ContainerBlockWebTemplate,
} from "@/components";

dayjs.extend(LocalizedFormat);

type FormData = {
  buy: AutocompleteGeneric<{ date: string; price: number }> | null;
  sell: AutocompleteGeneric<{ date: string; price: number }> | null;
};

const PARSE_DATA = [
  {
    id: "1",
    name: "Close Presale",
    price: 120,
    date: "2025-10-25T17:12:24.204Z",
    parsePrice: "$120/m2",
  },
  {
    id: "2",
    name: "Preventa abierta",
    price: 200,
    date: "2026-10-25T17:12:24.204Z",
    parsePrice: "$200/m2",
  },
  {
    id: "3",
    name: "Investors(closed table)",
    price: 225,
    date: "2027-10-25T17:12:24.204Z",
    parsePrice: "$225/m2",
  },
  {
    id: "4",
    name: "Investors(abierta)",
    price: 250,
    date: "2028-10-25T17:12:24.204Z",
    parsePrice: "$250/m2",
  },
  {
    id: "5",
    name: "Owners",
    price: 275,
    date: "2029-10-25T17:12:24.204Z",
    parsePrice: "$275/m2",
  },
  {
    id: "6",
    name: "Propietarios",
    price: 300,
    date: "2030-10-25T17:12:24.204Z",
    parsePrice: "$300/m2",
  },
  {
    id: "7",
    name: "Propietarios",
    price: 325,
    date: "2031-10-25T17:12:24.204Z",
    parsePrice: "$325/m2",
  },
  {
    id: "8",
    name: "Land holders",
    price: 400,
    date: "2032-10-25T17:12:24.204Z",
    parsePrice: "$400/m2",
  },
];

const formatProfitPorcentage = (
  buy: number,
  sell: number,
  quantityYears: number
) => {
  return sell && buy ? `${((sell / buy) * 100) / quantityYears}%` : "0%";
};

export const AreaChartBlockTemplate: React.FC = () => {
  const theme = useTheme();
  const [porcent, setPorcent] = React.useState("");
  const [search, setSearch] = React.useState("");
  const { control, getValues } = useForm<FormData>({
    defaultValues: {
      buy: null,
      sell: null,
    },
  });

  const optionsBuyOpt = React.useMemo(
    () =>
      PARSE_DATA.map(({ id, name, parsePrice, date, price }) => ({
        id,
        date,
        price,
        name: `${name} - ${parsePrice}`,
      })).filter((e) => e.name.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  const optionsSellOpt = React.useMemo(
    () =>
      PARSE_DATA.map(({ id, name, parsePrice, date, price }) => ({
        id,
        date,
        price,
        name: `${name} - ${parsePrice}`,
      })).filter((e) => e.name.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  const getProfitPorcentage = React.useCallback(() => {
    const buy = getValues("buy");
    const sell = getValues("sell");

    if (!buy || !sell) {
      return;
    }

    const quantityYears = dayjs(sell.date).diff(buy.date, "year");

    const profitPorcentage = formatProfitPorcentage(
      buy.price,
      sell.price,
      quantityYears
    );

    setPorcent(profitPorcentage);
  }, []);

  return (
    <ContainerBlockWebTemplate labelPosition="outside" label={
      <TagTitleDescription
        title={
          <Typography
            component="h2"
            variant="h3"
            fontWeight="bold"
            textAlign="center"
          >
            Investment simulator
          </Typography>
        }
        description={
          <Typography color="text.secondary" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
        }
        sx={{
          marginBottom: "3rem",
        }}
      />
    }>
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
            return (
              option as AutocompleteGeneric<{ date: string; price: number }>
            ).name;
          }}
          label="Compro a:"
          options={optionsBuyOpt}
          setInputValue={setSearch}
          variant="outlined"
          textFieldProps={{
            placeholder: "Selecciona una opción",
          }}
          sx={{
            width: 320,
          }}
          multiple={false}
          onChange={getProfitPorcentage}
        />
        <Divider orientation="vertical" flexItem />
        <AutocompleteController
          control={control}
          name="sell"
          disableClearable
          disableCloseOnSelect
          disablePortal
          getOptionLabel={(option) => {
            return (
              option as AutocompleteGeneric<{ date: string; price: number }>
            ).name;
          }}
          label="Vendo a:"
          options={optionsSellOpt}
          setInputValue={setSearch}
          variant="outlined"
          sx={{
            width: 320,
          }}
          multiple={false}
          onChange={getProfitPorcentage}
        />
        =
        <Typography variant="body1" fontWeight="bold">
          {porcent}
        </Typography>
      </Stack>

      <div>
        <AreaChartBlock
          data={PARSE_DATA.map(({ date, price }) => ({
            profit: price,
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
