import React from "react";
import styled from "styled-components";
import {useRouter} from "next/router";
import tequilaData from "../../_data/productList.json";
export default ProductDetails;

function ProductDetails() {
  const router = useRouter();
  const {productId} = router.query;

  const tequila = tequilaData.find(t => {
    return t.id === productId;
  });
  return (
    <>
      <h1>Product Detail Page </h1>
      {JSON.stringify(tequila)}
    </>
  );
}
