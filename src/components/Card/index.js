import { Box } from "@mui/material";

const Card = ({ children }) => {
  const cardStyle = {
    padding: "100px",
    margin: "10px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    border: "2px solid #ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Box sx={{ p: 3, marginX: 10 }} style={cardStyle}>
      {children}
    </Box>
  );
};

export default Card;
