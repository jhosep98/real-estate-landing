import { AutocompleteListModel } from "@wulperstudio/cms";
import {
  Control,
  FieldPath,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

export type AutocompleteData = {
  id: string;
  name: string;
};

export type AutocompleteGeneric<T extends Object = {}> = AutocompleteData & T;

export interface ComponentControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  control: Control<TFieldValues>;
  name: TName;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    "valueAsDate" | "setValueAs" | "disabled"
  >;
  shouldUnregister?: boolean;
  defaultValue?: FieldPathValue<TFieldValues, TName>;
}

interface AutocompleteBaseModel<
  T extends AutocompleteData,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false
> extends Omit<
    AutocompleteListModel<T, Multiple, DisableClearable, FreeSolo>,
    "onChange" | "defaultValue" | "value"
  > {
  label?: string;
  limitTags?: number;
  disabled?: boolean;
  required?: boolean;
  inputValue?: string;
  multiple?: Multiple;
  value?: Multiple extends true ? T[] : T | null;
  onChange?: (e: Multiple extends true ? T[] : T) => void;
  setInputValue?: (e: string) => void;
  disabledFilterOptions?: boolean;
  variantDivider?: boolean;
}

export interface AutocompleteControllerModel<
  T extends AutocompleteData,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false
> extends AutocompleteBaseModel<T, Multiple, DisableClearable, FreeSolo>,
    ComponentControllerProps<TFieldValues, TName> {}
