import * as React from "react";
import Box from "@mui/material/Box";

import {
  AreaChartBlockTemplate,
  MapBlockTemplate,
  TabsBlockTemplate,
  SlidesCardTemplate,
} from "@/templates";
import { BewomoCta } from "@/components";

export const MainBlocks: React.FC = () => {
  return (
    <Box
      sx={{ my: 4, py: 4, display: "flex", flexDirection: "column", gap: 16 }}
    >
      <AreaChartBlockTemplate />

      <MapBlockTemplate />

      <TabsBlockTemplate />

      <SlidesCardTemplate />

      <BewomoCta />
    </Box>
  );
};
