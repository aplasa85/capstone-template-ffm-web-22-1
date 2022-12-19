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
    </>
  );
}

export default TequilaPage;

const StyledTitle = styled.h2`
  border: 1px solid black;
  color: black;
  width: 130px;
  height: 70px;
  margin-top: auto;
  margin-left: 550px;
  padding: 20px;
`;
