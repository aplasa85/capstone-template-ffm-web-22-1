import Image from "next/image";
import styled from "styled-components";
import Icon from "../public/Assets/Agave.jpg";
import Link from "next/link";
import SearchBar from "../pages/searchBar";
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

  padding: 10px;
  margin: 20%;
`;
