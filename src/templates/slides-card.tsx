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
        data={[
          {
            title: `Item 1`,
            description: `Description 1`,
            image:
              "https://res.cloudinary.com/diusjfaoe/image/upload/v1729897515/cms/image_533_jcibcl.jpg",
          },
          {
            title: `Item 2`,
            description: `Description 2`,
            image:
              "https://res.cloudinary.com/diusjfaoe/image/upload/v1729897514/cms/image_534_eiuw9x.jpg",
          },
          {
            title: `Item 3`,
            description: `Description 3`,
            image:
              "https://res.cloudinary.com/diusjfaoe/image/upload/v1729897514/cms/image_528_wa9lkf.jpg",
          },
          {
            title: `Item 3`,
            description: `Description 3`,
            image:
              "https://res.cloudinary.com/diusjfaoe/image/upload/v1729897514/cms/image_529_he0npw.jpg",
          },
          {
            title: `Item 4`,
            description: `Description 4`,
            image:
              "https://res.cloudinary.com/diusjfaoe/image/upload/v1729897514/cms/image_534_eiuw9x.jpg",
          },
          {
            title: `Item 5`,
            description: `Description 5`,
            image:
              "https://res.cloudinary.com/diusjfaoe/image/upload/v1729897514/cms/image_528_wa9lkf.jpg",
          },
        ].map(({ description, image, title }, i) => ({
          title,
          description,
          image,
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
