"use client"

import * as React from "react";
import Slide from "@mui/material/Slide";
import { useScrollTrigger } from "@mui/material";

interface HideOnScrollModel {
  children: React.ReactElement;
  isDisabledHideOnScroll?: boolean;
}

export const HideOnScroll: React.FC<HideOnScrollModel> = (props) => {
  const { children } = props;

  const trigger = useScrollTrigger();

  if (props.isDisabledHideOnScroll) {
    return <div>{children}</div>;
  }

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};
