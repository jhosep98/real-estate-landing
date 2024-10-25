import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

import { HideOnScroll } from "@/components";
import { Button } from "@wulperstudio/cms";

export const Navbar: React.FC = () => (
  <HideOnScroll>
    <AppBar
      elevation={0}
      sx={{ backgroundColor: "background.default", color: "text.primary" }}
      position="static"
    >
      <Toolbar>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link href="/" passHref>
            <Image
              src="https://logo.clearbit.com/wulperstudio.com"
              alt="logo"
              width={60}
              height={60}
            />
          </Link>

          <Box component="nav" sx={{ display: "flex", gap: 2 }}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </Box>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Link href="/login">
              <Button variant="text" disableElevation>
                Login
              </Button>
            </Link>

            <Link href="/register">
              <Button variant="contained" disableElevation>
                Register
              </Button>
            </Link>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  </HideOnScroll>
);
