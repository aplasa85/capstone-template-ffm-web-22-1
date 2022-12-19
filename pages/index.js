import styled from "styled-components";
import Link from "next/link";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <ul>
        <Link href="/tequila">
          <StyledLink>Tequila</StyledLink>
        </Link>
        <Link href="/mezcal">
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
  border: 1px solid black;
  text-decoration: none;

  padding: 5px;
  margin: 20%;
`;
