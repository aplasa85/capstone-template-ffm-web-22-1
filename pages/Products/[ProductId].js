import React from "react";
import {useRouter} from "next/router";
import products from "../../_data/productList.json";
import Image from "next/image";
//import Pic from "../public/Assets/${product.image.id}";
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
          <StyledBox>
            <ul>
              <StyledLine>
                <li>Brand: {product.brand}</li>
              </StyledLine>
              <StyledLine>
                <li>Type: {product.type}</li>
              </StyledLine>
              ,
              <StyledLine>
                <li>Rating: {product.rating}</li>
              </StyledLine>
              ,
              <StyledLine>
                <li> Price: {product.price}</li>
              </StyledLine>
            </ul>

            <StyledButton>Add to Basket</StyledButton>
          </StyledBox>

          <StyledImage
            src={product.image}
            width="150"
            height="150"
            alt="Bottle of Mezcal"
          />
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

const StyledImage = styled(Image)`
  border: 1px solid black;
  height: 260px;
  width 260px;
  padding: 20px;
  margin-left: 60%;
  margin-bottom: 30%;
  margin-top: -32%;
`;

const StyledBox = styled.div`
  border: 1px solid black;
  align-content: column;
  height: 360px;
  width: 360px;
  margin-left: 15%;
  margin-bottom: 10%;
  margin-top: 10%;
  text-decoration none;
`;

const StyledLine = styled.li`
  text-size: 90px;
  color: superblack;
  margin-left: 25%;
  margin-top: 10%;
  font-size: larger;
`;

const StyledButton = styled.button`
  padding: 15px;
  margin-left: 30%;
  margin-top: 5%;
`;
