import React from "react";

import {useContext} from "react";
import {DrinksContext} from "../globalContext/drinksContext";

import BasketItem from "../components/BasketItem";

const basket = () => {
  const {basket} = useContext(DrinksContext);

  return (
    <div>
      <h1>Basket</h1>

      {basket.map(item => (
        <BasketItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default basket;
