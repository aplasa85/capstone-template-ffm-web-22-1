import React from "react";

import {useContext} from "react";
import {DrinksContext} from "../globalContext/drinksContext";
import DrinkCard from "../components/DrinkCard";

const Favorite = () => {
  const {listedItems} = useContext(DrinksContext);

  const bookmarkedArr = listedItems.filter(product => {
    return product.favorite;
  });

  return (
    <>
      <h1>Favorites</h1>
      {bookmarkedArr.map(drink => (
        <>
          <DrinkCard drink={drink} />
        </>
      ))}
    </>
  );
};
export default Favorite;
