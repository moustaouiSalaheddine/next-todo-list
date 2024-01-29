"use client";

import React from "react";

function item({ params }) {
  console.log(params);
  return (
    <div>
      <h1>hello {params.id}</h1>
      <p>this is dynamic page</p>
    </div>
  );
}

export default item;
