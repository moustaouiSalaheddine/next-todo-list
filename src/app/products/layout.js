import { Typography } from "@mui/material";

const ProductDetailLayout = ({ children }) => {
  return (
    <>
      {children}
      <Typography variant="h4">Featured products</Typography>
    </>
  );
};
export default ProductDetailLayout;
