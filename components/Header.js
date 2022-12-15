import React from "react";
import Image from "next/image";
import Icon from "../public/Assets/Agave.jpg";
import StyledCard from "./StyledCard.js";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Head>
        <title>Casa del Agave</title>
      </Head>

      <Link href="/">
        <StyledTitle>Casa del Agave</StyledTitle>
      </Link>

      <StyledParagraph>
        Welcome to the Casa del Agave online shop. Here you can find a fine
        selection of tequila and mezcal brands delivered right to your home.
        Thank you for choosing us and we certainly hope you will find the
        beverage of your convenience.
      </StyledParagraph>

      <StyledImage src={Icon} width="310" height="255" alt="Agave Plant" />
    </div>
  );
};

export default Header;

const StyledImage = styled(Image)`
  position: relative;
  left: 850px;
  bottom: 260px;
  border: 1px solid black;
  padding: 30px;
`;

const StyledTitle = styled.h1`
  border: 1px solid black;
  width: 400px;
  height: 150px;
  padding: 55px;
  padding-left: 75px;
  margin-left: 32%;
  margin-top: 70px;
`;

const StyledParagraph = styled.p`
  border: 1px solid black;
  width: 300px;
  height: 235px;
  margin-top: 100px;
  margin-left: 150px;
  font-size: 20px;
  align-content: center;
  padding: 10px;
`;

const StyledTitle1 = styled.h2`
  border: 1px solid black;
  height: 65px;
  width: 150px;
  padding: 20px;
  margin-left: 575px;
`;

const StyledLink = styled.link`
  color: black;
`;
