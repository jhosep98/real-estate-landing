"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import { Button } from "@wulperstudio/cms";

export const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        width: "100%",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: "75ch",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{ mb: 2 }}
            textAlign="center"
          >
            Material UI - Next.js - Wulpers Studio - App Router example in
            TypeScript
          </Typography>

          <Link
            href="/"
            color="secondary"
            component={NextLink}
            textAlign="center"
          >
            Go to @wulperstudio/cms
          </Link>
        </Box>

        <Button size="large" variant="contained">
          Wulpers Studio Button
        </Button>
      </Container>
    </Box>
  );
};
