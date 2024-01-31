import CustomizedTabHeaders from "@/components/CustomizedTabHeaders";
import { Box, ListItemButton, ListItemText, Typography } from "@mui/material";
import Link from "next/link";

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
  const { productId } = params;
  return (
    <>
      <CustomizedTabHeaders activeIndex={"Products"} />
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h3">Details about product {productId}</Typography>
        {[1, 2, 3].map((number, i) => {
          return (
            <Link key={i} href={`${productId}/reviews/${number}`}>
              <ListItemButton component="a">
                <ListItemText>
                  <Typography variant="h6" gutterBottom>
                    Review {number}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </Link>
          );
        })}
      </Box>
    </>
  );
};
export default ProductDetails;
