import styled from "styled-components";
import Navbar from "./Navbar";

export default function Layout({children}) {
  return (
    <StyledContainer>
      <Navbar />
      <StyledMainDiv>{children}</StyledMainDiv>

      <StyledFooter>
        <p>© Casa del Agave</p>
      </StyledFooter>
    </StyledContainer>
  );
}

const StyledMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 88.2vh;
  margin: 0 3%;
`;

const StyledFooter = styled.footer`
  background-color: grey;
  color: white;
  height: 60px;
  padding: 15px;
  padding-top: 8px;
  width: 100%;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
