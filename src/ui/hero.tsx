"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Hero: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 1 }}>
      <Box
        sx={{
          minHeight: "80vh",
          display: "grid",
          placeItems: "flex-start",
          justifyContent: "center",
          width: "100%",
          background:
            'url("https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
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
