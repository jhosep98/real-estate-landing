"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Hero: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 1 }}>
      <Box
        sx={{
          minHeight: "80vh",
          display: "grid",
          placeItems: "flex-start",
          justifyContent: "center",
          width: "100%",
          background:
            'url("https://res.cloudinary.com/diusjfaoe/image/upload/v1729897515/cms/image_536_caanzj.jpg")',
          backgroundSize: "cover",
          borderRadius: "3rem",
          paddingTop: "3rem",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{ maxWidth: "15ch" }}
          textAlign="center"
          fontWeight="bold"
        >
          Find and choose where you will live
        </Typography>
      </Box>
    </Container>
  );
};
