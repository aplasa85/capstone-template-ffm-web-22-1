//import { redirect } from "next/dist/server/api-utils"
import styled from "styled-components";

export default function Layout({children}) {
  return (
    <>
      <StyledNav>
        <header>
          <StyledMenu className="menu1">Menu</StyledMenu>
          <StyledInput />
          <StyledSearch className="menu2">Search</StyledSearch>
        </header>
      </StyledNav>

      <main>{children}</main>

      <StyledFooter>
<p>© Casa del Agave</p>
</StyledFooter>

    </>
  );
}

const StyledNav = styled.nav`
  background-color: black;

  width: 100%;
  padding: 20px;
  align-content: space-evenly;
`;

const StyledFooter = styled.footer`
background-color: black;
color: white;
height: 60px;
padding: 30px;
padding-top: 8px; 
width: 100%;`

const StyledMenu = styled.button`
margin-right: 1050px;
padding: 5px;
`

const StyledInput = styled.input`
margin-right: 20px;`

const StyledSearch = styled.button`
padding: 5px;
`