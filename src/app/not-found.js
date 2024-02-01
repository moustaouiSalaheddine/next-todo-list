import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { purple, red } from "@mui/material/colors";
import Link from "next/link";
const primary = red[500]; // #f44336

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: "white", fontWeight: "bolder" }}>
        404
      </Typography>
      <Typography variant="h3" style={{ color: "white", margin: 15 }}>
        page not found
      </Typography>
      <Typography variant="h6" style={{ color: "white" }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button sx={{ marginTop: 5 }} variant="contained">
        <Link href={"/"}>Back Home</Link>
      </Button>
    </Box>
  );
};
export default NotFound;
