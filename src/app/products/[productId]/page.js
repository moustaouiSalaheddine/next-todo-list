import CustomizedTabHeaders from "@/components/CustomizedTabHeaders";
import { Box, Typography } from "@mui/material";

export const generateMetadata = async ({ params }) => {
  const { productId } = params;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(productId);
    }, 1000);
  });
  const metadata = {
    title: `Product ${title}`,
    description: `This is the description for Product ${title}`,
    author: "Moustaoui Salaheddine",
    date: new Date().toISOString(),
  };
  return metadata;
};
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
