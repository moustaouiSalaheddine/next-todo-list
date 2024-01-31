import CustomizedTabHeaders from "@/components/CustomizedTabHeaders";
import { Box, ListItemButton, ListItemText, Typography } from "@mui/material";
import Link from "next/link";
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};
const ProductList = () => {
  const productId = 100;
  //   const random = getRandomInt(2);
  //   if (random === 1) {
  //     throw new Error("Error loading product details");
  //   }
  return (
    <>
      <CustomizedTabHeaders activeIndex={"Products"} />
      <Box sx={{}}>
        <Link href="/">
          <ListItemButton component="a">
            <ListItemText>
              <Typography variant="h1" gutterBottom>
                Products
              </Typography>
            </ListItemText>
          </ListItemButton>
        </Link>
        {[1, 2, 3].map((number, i) => {
          return (
            <Link key={i} href={`products/${number}`}>
              <ListItemButton component="a">
                <ListItemText>
                  <Typography variant="h6" gutterBottom>
                    Product {number}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </Link>
          );
        })}
        <Link href={`products/${productId}`}>
          <ListItemButton component="a">
            <ListItemText>
              <Typography variant="h6" gutterBottom>
                Product {productId}
              </Typography>
            </ListItemText>
          </ListItemButton>
        </Link>
      </Box>
    </>
  );
};
export default ProductList;
