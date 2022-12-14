import React from "react";
import {useRouter} from "next/router";
import tequilaData from "../../_data/productList.json";
import StyledCard from "../../components/StyledCard";

function ProductDetails() {
  const router = useRouter();
  const {productId} = router.query;

  const tequila = tequilaData.find(t => {
    return t.id === productId;
  });

  {
    <h1>{tequilaData.price} </h1>;
    {
      JSON.stringify(tequila);
    }
  }
}

export default ProductDetails;
