import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Tequila from "../../components/TequilaListComponent";
import Image from "next/image";

import tequilaData from "../../_data/TequilaList.json";
import TequilaList from "../../components/TequilaCard";
import TequilaCard from "../../components/TequilaCard";

function ProductDetails() {
  const router = router()
    const { TequilaCard } = router.query.tequilaData


  return (
    <>
      <Link href="/">
        <StyledTitle>Casa del Agave</StyledTitle>
      </Link>

      async function fetchProducts(product) {
     response = await fetchProducts (product)
     const tequilaData = await TequilaList.json
      return tequilaData.results;

    tequilaData.map(tequila =
    <>
      {Tequila.brand}
      {Tequila.rating}
      {Tequila.price}
      {Tequila.image}
      </>
    </>
  );
      }

export default 
);

<StyledButton>Add to basket</StyledButton>

const StyledTitle = styled.h1`
  border: 1px solid black;
  width: 400px;
  height: 150px;
  padding: 55px;
  padding-left: 75px;
  margin-left: 32%;
  margin-top: 70px;
`;

const StyledButton = styled.button`
padding: 10px
align-item: 40%;
`;
