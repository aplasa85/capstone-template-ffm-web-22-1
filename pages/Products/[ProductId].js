import React from "react";
import {useRouter} from "next/router";
import tequilaData from "../../_data/productList.json";

function ProductDetails() {
  const router = useRouter();
  const {productId} = router.query;

  const tequila = tequilaData.find(t => {
    return t.id === productId;
  });
  return (
    <>
      <h1>Tequila Time </h1> {JSON.stringify(tequila)}
    </>
  );
}

export default ProductDetails;
