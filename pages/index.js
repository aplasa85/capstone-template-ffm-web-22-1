import styled from "styled-components";
import Link from "next/link";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <ul>
        <Link href="categories/tequila">
          <StyledLink>Tequila</StyledLink>
        </Link>
        <Link href="categories/mezcal">
          <StyledLink>Mezcal</StyledLink>
        </Link>
      </ul>

      <Header />
    </>
  );
};

export default Home;

const StyledLink = styled.li`
  color: black;
  display: inline;
  border: 0.0625rem solid black;
  text-decoration: none;

  padding: 0.3125rem;
  margin: 20%;
`;
