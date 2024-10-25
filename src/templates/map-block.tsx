"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import { TagTitleDescription } from "@wulperstudio/cms";

import { BlockIframe, ContainerBlockWebTemplate } from "@/components";

export const MapBlockTemplate: React.FC = () => {
  return (
    <ContainerBlockWebTemplate
      label={
        <TagTitleDescription
          title={
            <Typography
              component="h2"
              variant="h3"
              fontWeight="bold"
              textAlign="center"
            >
              Mapa
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
      }
      labelPosition="outside"
    >
      <BlockIframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.351865180165!2d-3.7037199999999997!3d40.416670000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c5f9f1c3f0b1b3%3A0x9e0a3e3c2c0e2e9a!2sEstado+de+M%C3%A9xico!5e0!3m2!1ses!2ses!4v1687359393564!5m2!1ses!2ses"
        iframeProps={{
          allowFullScreen: true,
          frameBorder: 0,
        }}
      />
    </ContainerBlockWebTemplate>
  );
};
