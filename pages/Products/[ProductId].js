import React from "react";
import {useRouter} from "next/router";
import products from "../../_data/productList.json";
import Image from "next/image";
import StyledCard from "../../components/StyledCard";
import styled from "styled-components";
import Link from "next/link";

function ProductDetails() {
  const router = useRouter();
  const {productId} = router.query;

  const product = products.find(product => {
    return product.id === productId;
  });

  return (
    <>
      <Link href="/">
        <StyledTitle>Casa del Agave</StyledTitle>
      </Link>

      {product && (
        <>
          <div>
            {product.brand},{product.type}, {product.rating},{product.price},
            {product.Image}{" "}
          </div>
          <button>Add to Basket</button>
        </>
      )}
    </>
  );
}

export default ProductDetails;

const StyledTitle = styled.h1`
  border: 1px solid black;
  width: 400px;
  height: 150px;
  padding: 55px;
  padding-left: 75px;
  margin-left: 32%;
  margin-top: 70px;
`;

const StyledBox = styled.div`
  border: 1px solid black;
`;
