import React from "react";
import ButtonUsage from "../../../components/ButtonUsage";
import Image from "next/image";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";

function page() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <p>this is static page</p>
      <Image
        src={"https://via.placeholder.com/250x150/"}
        width={250}
        height={250}
      />
      <ButtonUsage />
      <Paper sx={{}}></Paper>
    </Box>
  );
}

export default page;
