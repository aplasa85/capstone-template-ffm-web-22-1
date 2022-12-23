import React from "react";
import {useRouter} from "next/router";
import DrinkCard from "../../components/DrinkCard";
import {useContext} from "react";
import {DrinksContext} from "../../globalContext/drinksContext";

function DrinkType() {
  const {listedItems, basket} = useContext(DrinksContext);
  const router = useRouter();
  const {drinkType} = router.query;
  const categoryType = listedItems.filter(
    product => product.category.toLowerCase() === drinkType
  );

  return (
    <>
      <p>{JSON.stringify(basket)}</p>
      <h1>{drinkType} list</h1>
      {categoryType.map(product => (
        <DrinkCard key={product.id} drink={product} />
      ))}
    </>
  );
}

export default DrinkType;
