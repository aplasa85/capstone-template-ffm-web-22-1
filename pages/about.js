import React from "react";
import Image from "next/image";
import Icon from "../public/Assets/Agave.jpg";
import styled from "styled-components";

const about = () => {
  return (
    <div>
      <StyledArticle>
        Welcome to the About section of our tequila web shop! We are a group of
        tequila enthusiasts who are passionate about bringing the finest and
        most diverse selection of tequilas to our customers. Our team has
        traveled to distilleries across Mexico to hand-select the best tequilas
        for our shop. We believe in the rich history and cultural significance
        of tequila and strive to educate our customers on its production process
        and different varieties. We are committed to providing exceptional
        service and ensuring that every customer has a memorable shopping
        experience with us. Thank you for choosing us and we hope you enjoy
        exploring all that our shop has to offer. Salud!
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
`;

const StyledImage = styled(Image)`
  margin: 3rem;
`;

export default about;
