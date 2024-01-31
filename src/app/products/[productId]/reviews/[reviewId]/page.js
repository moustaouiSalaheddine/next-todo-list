import CustomizedTabHeaders from "@/components/CustomizedTabHeaders";
import { Box, ListItemButton, ListItemText, Typography } from "@mui/material";
import Link from "next/link";
import { notFound } from "next/navigation";

const ProductReviews = ({ params }) => {
  const { productId, reviewId } = params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <>
      <CustomizedTabHeaders activeIndex={"Products"} />
      <Box sx={{}}>
        <Typography variant="h1" gutterBottom>
          Review {reviewId} for product {productId}
        </Typography>
        {[1, 2, 3].map((number, i) => {
          return (
            <Link key={i} href={`./${number}`}>
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
export default ProductReviews;
