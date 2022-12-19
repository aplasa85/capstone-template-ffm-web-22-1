import React from "react";
import MezcalListComponent from "../components/MezcalListComponent";
import productList from "../_data/productList.json";
import Header from "../components/Header";
import styled from "styled-components";

function MezcalPage({favorites, setFavorites}) {
  return (
    <>
      <Header />
      <StyledTitle>Mezcal</StyledTitle>
      <MezcalListComponent
        favorites={favorites}
        setFavorites={setFavorites}
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
  height: 70px;
  margin-top: auto;
  margin-left: 550px;
  padding: 20px;
`;
