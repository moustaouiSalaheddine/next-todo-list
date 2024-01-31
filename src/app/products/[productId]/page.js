import CustomizedTabHeaders from "@/components/CustomizedTabHeaders";
import { Box, Typography } from "@mui/material";

const ProductDetails = ({ params }) => {
  return (
    <>
      <CustomizedTabHeaders activeIndex={"Products"} />
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h3">
          Details about product {params.productId}
        </Typography>
      </Box>
    </>
  );
};
export default ProductDetails;
