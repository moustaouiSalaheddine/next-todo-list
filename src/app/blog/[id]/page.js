"use client";

import CustomizedTabHeaders from "@/components/CustomizedTabHeaders";
import React, { Fragment } from "react";

function item({ params }) {
  return (
    <Fragment>
      <CustomizedTabHeaders activeIndex={"Blog"} />
      <h1>hello {params.id}</h1>
      <p>this is dynamic page</p>
    </Fragment>
  );
}

export default item;
