import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import { ContainerBlockWeb, WrapperBlockModel } from "@wulperstudio/cms";

interface ContainerBlockWebTemplateModel extends WrapperBlockModel {
  children: React.ReactNode;
  label?: React.ReactNode;
  labelPosition?: "inside" | "outside";
  isDisabled?: boolean;
}

export const ContainerBlockWebTemplate: React.FC<
  ContainerBlockWebTemplateModel
> = ({ children, label, labelPosition = "outside", ...props }) => {
  const theme = useTheme();
  const {
    isPadding = true,
    variant = "border",
    isDisabled,
    sx,
    ...rest
  } = props;

  return (
    <Container maxWidth="lg">
      {label && labelPosition === "outside" ? (
        <Box mb="1.5rem">{label}</Box>
      ) : null}

      <ContainerBlockWeb
        isPadding={isPadding}
        variant={variant}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          p: "1rem",
          backgroundColor: "background.default",
          [theme.breakpoints.down("md")]: {
            p: 0,
            border: "unset",
            gap: ".625rem",
          },
          ...(isDisabled && {
            border: "unset",
            borderRadius: "unset",
            backgroundColor: "unset",
            p: 0,
          }),
          ...sx,
        }}
        {...rest}
      >
        {label && labelPosition === "inside" ? label : null}

        {children}
      </ContainerBlockWeb>
    </Container>
  );
};
