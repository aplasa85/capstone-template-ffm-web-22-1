import React from "react";
import MezcalListComponent from "../components/MezcalListComponent";
import productList from "../_data/ProductList.json";
import Header from "../components/Header";
import styled from "styled-components";

function MezcalPage() {
  return (
    <>
      <Header />
      <StyledTitle>Mezcal</StyledTitle>
      <MezcalListComponent
        mezcalData={productList.filter(product => {
          return product.category === "Mezcal";
        })}
      />
    </>
  );
}

export default MezcalPage;

const StyledTitle = styled.h2`
  border: 1px solid black;
  color: black;
  width: 130px;
  height: 50px;
  margin-top: auto;
  margin-left: 550px;
`;
