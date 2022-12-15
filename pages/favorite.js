import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Link from "next/link";
//import "../components/productList.json";
import TequilaCard from "../components/TequilaCard";
import MezcalCard from "../components/MezcalCard";
import {useRouter} from "next/router";
import bookmarked from "../components/MezcalCard";
// import bookmarked from "../components/TequilaCard";

const favorite = () => {
  return (
    <>
      <Header />; const useRouter = useRouter(); const {productId} =
      router.query; const bookmarked = bookmarked.map(item = (
      productList.bookmarked === true; ))); return(
      {JSON.stringify(bookmarked)}
    </>
  );
};

export default favorite;
