import React from "react";
import Head from "next/head";
import {useContext} from "react";
import {DrinksContext} from "../globalContext/drinksContext";
import styled from "styled-components";
import BasketItem from "../components/BasketItem";

const basket = () => {
  const {basket} = useContext(DrinksContext);

  return (
    <>
      <div>
        <Head>
          <title>Basket</title>
        </Head>
        <h1>Basket</h1>
        <h3>// put prices and ratings as numbers in productList.json</h3>
      </div>

      <div>
        {basket.map(item => (
          <BasketItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default basket;
