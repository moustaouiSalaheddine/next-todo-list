import { Box, Typography } from "@mui/material";

const ComplexDashboardPage = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h1" gutterBottom>
        Complex Dashboard
      </Typography>
      <Typography variant="subtitle1" component="div">
        Parallel and Intercepted Routes
      </Typography>
      <Typography variant="body1" component="div">
        @folder Named slot
      </Typography>
    </Box>
  );
};

export default ComplexDashboardPage;
