"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TagTitleDescription } from "@wulperstudio/cms";

import { SlidesCardInfinite } from "@/ui";
import { AssetContentColumn } from "@/components";

export const SlidesCardTemplate: React.FC = () => {
  return (
    <Box>
      <TagTitleDescription
        title={
          <Typography
            component="h2"
            variant="h3"
            fontWeight="bold"
            textAlign="center"
          >
            Cards
          </Typography>
        }
        description={
          <Typography color="text.secondary" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
        }
        sx={{}}
      />

      <SlidesCardInfinite
        data={Array.from({ length: 10 }).map((_, i) => ({
          title: `Item ${i}`,
          description: `Description ${i}`,
          image:
            "https://cdn.dribbble.com/userupload/17132041/file/original-6109f569c0571ca61d5b9b5f241de01e.gif",
          tag: "Tag",
          footer: "Footer",
          sx: {
            minHeight: 420,
            borderRadius: "32px",
            position: "relative",
            overflow: "hidden",
            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 51.91%, rgba(0,0,0,0.3) 75.88%)",
            },
          },
          sxImage: {
            backgroundSize: "cover",
          },
          sxContent: {
            display: "none",
          },
          customChildren: (
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                zIndex: 1,
                p: 2,
              }}
            >
              <Typography variant="subtitle2" color="#fff">
                Item {i}
              </Typography>
            </Box>
          ),
        }))}
        renderCard={(e) => <AssetContentColumn {...e} />}
        style={{
          padding: "72px 0",
          marginBottom: "48px",
        }}
      />
    </Box>
  );
};
