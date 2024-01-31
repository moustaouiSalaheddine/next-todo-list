"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Link from "next/link";

const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "#1890ff",
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.85)",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);
const tabs = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Blog",
    href: "/blog/salah",
  },
];
const CustomizedTabHeaders = ({ activeIndex = "Home" }) => {
  const getIndexByTitleIgnoreCase = (title) => {
    const lowerCaseTitle = title.toLowerCase();
    return tabs.findIndex((tab) => tab.title.toLowerCase() === lowerCaseTitle);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ bgcolor: "#fff" }}>
        <AntTabs
          value={getIndexByTitleIgnoreCase(activeIndex)}
          //   onChange={handleChange}
          aria-label="ant example"
        >
          {tabs.map((item, i) => {
            return (
              <Link key={i} href={item?.href}>
                <AntTab label={item?.title} />
              </Link>
            );
          })}
        </AntTabs>
        <Box sx={{ p: 3 }} />
      </Box>
    </Box>
  );
};
export default CustomizedTabHeaders;
