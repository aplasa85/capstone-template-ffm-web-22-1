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

const StyledArticle = styled.article`
  border: 1px solid black;
  display: flex;
  order: 1px solid black;
  width: 300px;
  height: 235px;
  margin-bottom: 15%;
  margin-left: 35%;
  font-size: 20px;
  align-content: center;
  justify: right;
  padding: 10px;
`;

const TheImage = styled(Image)`
  position: relative;
  left: 850px;
  bottom: 260px;
  border: 1px solid black;
  padding: 30px;
`;

export default about;
