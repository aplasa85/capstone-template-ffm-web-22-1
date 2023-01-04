import React from "react";
import Image from "next/image";
import Icon from "../public/Assets/Agave.jpg";
import styled from "styled-components";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Link href="/">
        <StyledTitle>Casa del Agave!</StyledTitle>
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
  left: 53.125rem;
  bottom: 16.25rem;
  border: 1px solid black;
  padding: 1.875rem;
`;

const StyledTitle = styled.h1`
  border: 1px solid black;
  width: 25rem;
  height: 9.375rem;
  padding: 3.4rem;
  padding-left: 4.7rem;
  margin-left: 32%;
  margin-top: 4.3rem;
`;

const StyledParagraph = styled.p`
  border: 1px solid black;
  width: 18.75rem;
  height: 14.7rem;
  margin-top: 6.25rem;
  margin-left: 9.375rem;
  font-size: 1.25rem;
  align-content: center;
  padding: 0, 625rem;
`;
