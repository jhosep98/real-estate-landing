"use client";

import * as React from "react";
import { AutocompleteList } from "@wulperstudio/cms";
import { Box, Divider, useTheme } from "@mui/material";
import { Controller, FieldPath, FieldValues } from "react-hook-form";

import { Capitalize } from "@/helpers";
import { AutocompleteControllerModel, AutocompleteData } from "@/types";

const DEFAULT_REQUIRED_MESSAGE = "This field is required";

const RenderOption = <T extends AutocompleteData>(
  p: React.HTMLAttributes<HTMLLIElement>,
  option: unknown,
  parent_id?: string
) => (
  <Box
    component="li"
    {...p}
    key={(option as T).id}
    id={`${parent_id}_${(option as AutocompleteData).name.toLowerCase()}`}
  >
    {(option as T).name}
  </Box>
);

export const AutocompleteController = <
  T extends AutocompleteData,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  Multiple extends boolean | undefined = true,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false
>({
  variant = "unfilled",
  name,
  label = Capitalize(name, "_"),
  limitTags = 2,
  options,
  control,
  inputValue,
  disabled = false,
  required = false,
  multiple = true,
  onChange = () => {},
  setInputValue = () => {},
  defaultValue,
  disabledFilterOptions = false,
  variantDivider = false,
  renderOption,
  rules,
  ...props
}: AutocompleteControllerModel<
  T,
  TFieldValues,
  TName,
  Multiple,
  DisableClearable,
  FreeSolo
>) => {
  const theme = useTheme();

  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={{
          required: required ? DEFAULT_REQUIRED_MESSAGE : undefined,
          ...rules,
        }}
        render={({ field: { value, ...field }, fieldState: { error } }) => (
          <AutocompleteList
            size="auto"
            {...props}
            id={`${name}-autocomplete`}
            fullWidth
            autoHighlight
            openOnFocus
            filterSelectedOptions
            loadingText="Cargando..."
            noOptionsText="No hay opciones."
            options={options ?? []}
            disabled={disabled}
            limitTags={limitTags}
            label={label}
            value={(value ?? null) as any}
            variant={variant}
            error={!!error}
            inputValue={inputValue}
            errorMessage={error?.message}
            isOptionEqualToValue={(option: any, _value: any) =>
              option?.id === _value?.id
            }
            getOptionLabel={(option) => (option as T)?.name ?? ""}
            renderOption={(p, o, s, os) =>
              renderOption?.(p, o, s, os) ?? RenderOption?.(p, o, props?.id)
            }
            filterOptions={disabledFilterOptions ? undefined : (x) => x}
            onChange={(e: any, _value: any) => {
              field.onChange(_value);
              onChange(_value);
              setInputValue("");
            }}
            multiple={multiple as Multiple}
            backgroundColor={theme.palette.background.default} // theme.palette.primary.contrastText
            LabelProps={{
              sx: {
                margin: 0,
              },
            }}
            textFieldProps={{
              onChange: (e) => setInputValue(e.target.value),
              onBlur: () => {
                field.onBlur();
                setInputValue("");
              },
              name,
              ...props.textFieldProps,
            }}
            clearOnBlur
          />
        )}
      />

      {variantDivider ? <Divider variant="fullWidth" /> : null}
    </>
  );
};
