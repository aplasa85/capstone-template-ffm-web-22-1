//import { redirect } from "next/dist/server/api-utils"
import styled from "styled-components";

export default function Layout({children}) {
  return (
    <>
      <StyledNav>
        <header>
          <button className="menu">Menu</button>
          <input />
          <button className="menu">Search</button>
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
padding-top: 10px; 
width: 100%;`