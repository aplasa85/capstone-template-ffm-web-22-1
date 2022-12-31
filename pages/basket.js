import React from "react";
import Head from "next/head";
import {useContext} from "react";
import {DrinksContext} from "../globalContext/drinksContext";
import styled from "styled-components";
import BasketItem from "../components/BasketItem";
import Header from "../components/Header";

const basket = () => {
  const {basket} = useContext(DrinksContext);

  return (
    <>
      <Head>
        <title>Basket</title>
      </Head>
      <Header />
      <h1>Basket</h1>

      {basket.map(item => (
        <BasketItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default basket;
