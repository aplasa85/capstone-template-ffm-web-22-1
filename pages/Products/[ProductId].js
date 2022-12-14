import React from "react";
import styled from "styled-components";
import {useRouter} from "next/router";
import tequilaData from "../../_data/ProductList.json";

function ProductDetails() {
  const router = useRouter();
  const {productId} = router.query;

  const tequila = tequilaData.find(t => {
    return t.id === productId;
  });
  return (
    <>
      <h1>Ich bin die Product Detail Page </h1>
      product: {JSON.stringify(tequila)}
    </>
  );
}

export default ProductDetails;
