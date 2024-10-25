import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { SxProps, Theme } from "@mui/material";
import Typography from "@mui/material/Typography";

import { ContainerCard } from "./container-card";

type IDirection = "column" | "row" | "row-reverse";
export interface AssetContentColumnModel {
  childrenImage?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  image?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  tag?: React.ReactNode;
  title: string;
  sx?: SxProps<Theme>;
  sxImage?: SxProps<Theme>;
  sxContent?: SxProps<Theme>;
  direction?: IDirection;
  customChildren?: React.ReactNode;
  header?: React.ReactNode;
}

export const AssetContentColumn: React.FC<AssetContentColumnModel> = ({
  childrenImage,
  description,
  footer,
  image,
  onClick,
  tag,
  title,
  sx,
  sxContent,
  sxImage,
  header,
  direction = "column",
  customChildren,
}) => {
  return (
    <ContainerCard
      onClick={onClick}
      padding="0px"
      sx={{
        display: "flex",
        flexDirection: "column-reverse",
        backgroundColor: "background.paper",
        borderRadius: "1rem",
        "&:hover": {
          backgroundColor: "background.paper",
        },
        ...(direction === "row" && {
          flexDirection: "row",
        }),
        ...(direction === "row-reverse" && {
          flexDirection: "row-reverse",
          justifyContent: "flex-end",
          gap: "1rem",
        }),
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "1.5rem",
          p: "1.5rem 1rem",
          ...sxContent,
        }}
      >
        <Box className="card__content">
          {tag && tag}

          <Typography
            className="card__content-title"
            variant="h4"
            component="h2"
            gutterBottom
          >
            {title}
          </Typography>

          {description && (
            <Typography
              className="card__content-description"
              variant="subtitle2"
              color="text.primary"
              fontWeight={400}
            >
              {description}
            </Typography>
          )}
        </Box>

        {footer}
      </Box>

      {customChildren}

      {image ? (
        <Box
          sx={{
            background: `url(${image}) no-repeat center center`,
            display: "inline-block",
            objectPosition: "center",
            borderRadius: "1rem",
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            margin: 0,
            position: "relative",
            aspectRatio: "3/2",
            minHeight: 270,
            overflow: "hidden",
            flex: 1,
            ...(direction !== "column" && {
              maxWidth: 320,
              minHeight: 280,
              borderBottomRightRadius: "1rem",
              borderBottomLeftRadius: "1rem",
              aspectRatio: "unset",
            }),
            width: "100%",
            backgroundSize: "cover",
            ...sxImage,
          }}
        >
          {childrenImage}
        </Box>
      ) : (
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{
            display: "inline-block",
            borderRadius: "1rem",
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            margin: 0,
            position: "relative",
            aspectRatio: "3/2",
            minHeight: 270,
            overflow: "hidden",
            flex: 1,
            ...(direction !== "column" && {
              maxWidth: 320,
              minHeight: 280,
              borderBottomRightRadius: "1rem",
              borderBottomLeftRadius: "1rem",
              aspectRatio: "unset",
            }),
            width: "100%",
            backgroundSize: "cover",
            ...sxImage,
          }}
        />
      )}

      {header}
    </ContainerCard>
  );
};
