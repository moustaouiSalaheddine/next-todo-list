import { Box, Typography } from "@mui/material";

const ComplexDashboardLayout = ({
  children,
  users,
  revenue,
  notifications,
}) => {
  return (
    <>
      <Typography variant="h1" gutterBottom>
        {children}
      </Typography>

      <Box
        sx={{ p: 1 }}
        style={{
          display: "flex",
          width: "100%",
          gap: 5,
        }}
      >
        <Box
          style={{ display: "flex", flexDirection: "column", flex: 2, gap: 10 }}
        >
          <Box>{users}</Box>
          <Box>{revenue}</Box>
        </Box>
        <Box
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
          }}
        >
          {notifications}
        </Box>
      </Box>
    </>
  );
};
export default ComplexDashboardLayout;
