//import { redirect } from "next/dist/server/api-utils"
import styled from "styled-components";
import Header from "./Header";

export default function Layout({children}) {
  return (
    <>
      <StyledNav>
        <Header />
        <StyledMenu className="menu1">Menu</StyledMenu>
        <StyledInput />
        <StyledSearch className="menu2">Search</StyledSearch>
      </StyledNav>

      <main>{children}</main>

      <StyledFooter>
        <p>© Casa del Agave</p>
      </StyledFooter>
    </>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: grey;
  padding: 15px;
`;

const StyledFooter = styled.footer`
  background-color: grey;
  color: white;
  height: 60px;
  padding: 15px;
  padding-top: 8px;
  width: 100%;
`;

const StyledMenu = styled.button`
  margin-right: 550px;
  padding: 5px;
`;

const StyledInput = styled.input`
  margin-right: 20px;
`;

const StyledSearch = styled.button`
  padding: 5px;
`;
