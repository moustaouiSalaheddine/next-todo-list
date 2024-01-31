import CustomizedTabHeaders from "@/components/CustomizedTabHeaders";
import { Box, Tab, Tabs } from "@mui/material";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <CustomizedTabHeaders activeIndex={"Home"} />
      <h1>Welcome home!</h1>
    </div>
  );
};
export default Home;
