import React from "react";
import productList from "../_data/productList.json";
import TequilaListComponent from "../components/TequilaListComponent";
import Header from "../components/Header";
import styled from "styled-components";

function TequilaPage() {
  return (
    <>
      <Header />
      <StyledTitle>Tequila</StyledTitle>
      <TequilaListComponent
        tequilaData={productList.filter(product => {
          return product.category === "Tequila";
        })}
      />
      ;
    </>
  );
}

export default TequilaPage;

const StyledTitle = styled.h2`
  border: 0.0625rem solid black;
  color: black;
  width: 8.125rem;
  height: 4.375rem;
  margin-top: auto;
  margin-left: 34.375rem;
  padding: 1.25rem;
`;
