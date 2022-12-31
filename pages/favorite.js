import React from "react";
import Header from "../components/Header";
import {useContext} from "react";
import {DrinksContext} from "../globalContext/drinksContext";
import DrinkCard from "../components/DrinkCard";
import Image from "next/image";

const favorite = () => {
  const {listedItems} = useContext(DrinksContext);

  const bookmarkedArr = listedItems.filter(product => {
    return product.favorite;
  });

  return (
    <>
      <Header />

      <h1>Favorites</h1>
      {bookmarkedArr.map(drink => (
        <>
          <DrinkCard drink={drink} />
        </>
      ))}
    </>
  );
};
export default favorite;
