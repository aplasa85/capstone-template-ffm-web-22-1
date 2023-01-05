import Link from "next/link";
import React from "react";
import Image from "next/image";
import Icon from "../public/Assets/Agave.jpg";
import AgaveField from "../public/Assets/Agave.bis.png";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <StyledH1>Casa del Agave</StyledH1>
      <StyledLinksContainer>
        <StyledLink href="categories/tequila">Tequila</StyledLink>
        <StyledLink href="categories/mezcal">Mezcal</StyledLink>
      </StyledLinksContainer>

      <StyledImage
        src={AgaveField}
        width="310"
        height="255"
        alt="Agave Plant"
      />

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
  padding: 0.5rem;
  background-color: #66f;
  cursor: pointer;
  text-decoration: none;
  color: white;
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
  margin: 2rem 0;
`;

export default Home;
