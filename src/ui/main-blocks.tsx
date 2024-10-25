import * as React from "react";
import Box from "@mui/material/Box";

import { AreaChartBlockTemplate } from "@/templates";

export const MainBlocks: React.FC = () => {
  return (
    <Box sx={{ my: 4, py: 4 }}>
      <AreaChartBlockTemplate />
    </Box>
  );
};
