import React from "react";
import {useRouter} from "next/router";
import products from "../../_data/productList.json";
import Image from "next/image";
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

            <StyledImage
              src={product.image}
              width="150"
              height="150"
              alt="Bottle of Mezcal"
            />

            <StyledButton>Add to Basket</StyledButton>
          </StyledBox>
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
  padding-left: 85px;
  margin-left: 35%;
  margin-top: 7%;
  margin-bottom: 20px;
`;

const StyledImage = styled(Image)`
  order: 1px solid black;
  margin-left: 175%;
  padding: 20px;
  height: 240px;
  width: 240px;
  margin-top: -55%;
`;

const StyledBox = styled.div`
height: 360px;
  width: 360px;
  margin-left: 15%;
   margin-bottom: 20%;
   border: 1px solid black;
   padding: 10px;
   -webkit-align-content: column;
   -ms-flex-line-pack: column;
   align-content: column;
   height: 360px;
   width: 360px;
   margin-bottom: 20%;
   -webkit-text-decoration: none;
   text-decoration: none;
   margin-top: 15%;
  text-decoration none;
`;

const StyledLine = styled.li`
  text-size: 90px;
  color: superblack;
  margin-left: 20%;
  margin-top: 10%;
  font-size: larger;
`;

const StyledButton = styled.button`
  padding: 15px;
  margin-left: 30%;
  margin-top: 25%;
`;
