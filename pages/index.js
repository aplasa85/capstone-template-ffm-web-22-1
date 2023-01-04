import Link from "next/link";
import React from "react";
import Image from "next/image";
import Icon from "../public/Assets/Agave.jpg";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <StyledH1>Casa del Agave</StyledH1>
      <StyledLinksContainer>
        <StyledLink href="categories/tequila">Tequila</StyledLink>
        <StyledLink href="categories/mezcal">Mezcal</StyledLink>
      </StyledLinksContainer>

      <StyledImage src={Icon} width="310" height="255" alt="Agave Plant" />

      <StyledParagraph>
        Welcome to the Casa del Agave online shop. Here you can find a fine
        selection of tequila and mezcal brands delivered right to your home.
        Thank you for choosing us and we certainly hope you will find the
        beverage of your convenience.
      </StyledParagraph>

      <StyledImage src={Icon} width="310" height="255" alt="Agave Plant" />
    </>
  );
};

const StyledLink = styled(Link)`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  border: 1px solid black;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #f5f5f5;
  cursor: pointer;
  text-decoration: none;
`;

const StyledLinksContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

const StyledParagraph = styled.p`
  font-size: 1.5rem;
`;

const StyledH1 = styled.h1`
  margin: 3rem;
  font-size: 3rem;
`;

const StyledImage = styled(Image)`
  margin-bottom: 3rem;
`;

export default Home;
