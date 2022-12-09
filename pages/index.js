import Image from "next/image";
import styled from "styled-components";
import Icon from "../public/Assets/Agave.jpg";

const Home = () => {
  return (
    <div>
      <StyledTitle>Casa del Agave.</StyledTitle>

      <ul>
        <StyledLink>Tequila</StyledLink>
        <StyledLink>Mezcal</StyledLink>
      </ul>

      <StyledParagraph>
        Welcome to the Casa del Agave online shop. Here you can find a fine
        selection of tequila and mezcal brands delivered right to your home.
        Thank you for choosing us and we certainly hope you will find the
        beverage of your convenience.
      </StyledParagraph>

      <TheImage src={Icon} width="310" height="255" alt="Agave plant" />
    </div>
  );
};

export default Home;
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
  margin-top: 10%;
  margin-left: 150px;
  font-size: 20px;
  align-content: center;
`;

const StyledLink = styled.li`
  color: black;
  display: inline;
  border: 1px solid black;
  text-decoration: none;

  padding: 20px;
  margin: 20%;
`;
const TheImage = styled(Image)`
  position: relative;
  left: 850px;
  bottom: 260px;
  border: 1px solid black;
  padding: 30px;
`;
