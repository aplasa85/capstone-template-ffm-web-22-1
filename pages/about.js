import React from "react";
import Image from "next/image";
import Icon from "../public/Assets/Agave.jpg";
import styled from "styled-components";
import {ST} from "next/dist/shared/lib/utils";

const about = () => {
  return (
    <div>
      <StyledTitle> About Casa del Agave</StyledTitle>
      <StyledArticle>
        Welcome to the Casa del Agave online shop! We are a group of tequila and
        mezcal enthusiasts who are passionate about bringing the finest and most
        diverse selection of tequilas and mezcales to our customers. We believe
        in the rich history and cultural significance of tequila and strive to
        educate our customers on its production process and different varieties.
        Thank you for choosing us and we hope you enjoy exploring all that our
        shop has to offer. Salud!
      </StyledArticle>

      <StyledImage src={Icon} width="310" height="255" alt="Agave Plant" />

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

const StyledArticle = styled.article`
  font-size: 1.5rem;
  margin: 4rem;
  justify: center;
  text-align: center;
`;

const StyledImage = styled(Image)`
  margin: 3rem;
  //Needs to be justified in the center//
`;

const StyledTitle = styled.h1`
  text-align: center;
  margin-top: 5rem;
  justify: center;
`;

export default about;
