import React from "react";
import Image from "next/image";
import Icon from "../public/Assets/Agave.jpg";
import styled from "styled-components";

const about = () => {
  return (
    <div>
      <StyledTitle>Casa del Agave</StyledTitle>

      <StyledParagraph>
        Welcome to the Casa del Agave online shop. Here you can find a fine
        selection of tequila and mezcal brands delivered right to your home.
        Thank you for choosing us and we certainly hope you will find the
        beverage of your convenience.
      </StyledParagraph>

      <TheImage src={Icon} width="310" height="255" alt="Agave plant" />

      <StyledArticle>
        Casa del Agave <br />
        Neue Straße 100 <br />
        10111 Berlin, Germany <br />
        Telephone: +4930123321123 <br />
        E-mail: agave@gmail.com
      </StyledArticle>
    </div>
  );
};

const StyledTitle = styled.h1`
  border: 1px solid black;
  width: 25rem;
  height: 9.375rem;
  padding: 3, 4375rem;
  padding-left: 4.6875rem;
  margin-left: 32%;
  margin-top: 70px;
`;

const StyledParagraph = styled.p`
  border: 1px solid black;
  width: 18.75rem;
  height: 14.6875rem;
  margin-top: 6.25rem;
  margin-left: 9.375rem;
  font-size: 1.25rem;
  align-content: center;
  padding: 0.625rem;
`;

const StyledArticle = styled.article`
  border: 1px solid black;
  display: flex;
  order: 1px solid black;
  width: 18.75rem;
  height: 14.6875rem;
  margin-bottom: 15%;
  margin-left: 35%;
  font-size: 1.25rem;
  align-content: center;
  justify: right;
  padding: 0.625rem;
`;

const TheImage = styled(Image)`
  position: relative;
  left: 53.125rem;
  bottom: 16.25rem;
  border: 1px solid black;
  padding: 1.875rem;
`;

export default about;
