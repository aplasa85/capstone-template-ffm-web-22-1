//import Head from "next/head"
//import layout from "../components/layout"
import styled from "styled-components"

export default function Home() {
  return (
    <>

    <StyledTitle>
      <h1>Casa del Agave</h1>
    </StyledTitle>
<StyledParagraph>
<p>Welcome to the Casa
del Agave online shop. 

Here you can find a fine
selection of tequila and
mezcal brands delivered
right to your home.

Thank you for choosing us 
and we certainly hope 
you will find the beverage 
of your convenience.</p>


</StyledParagraph>
</>

  );
}

const StyledTitle = styled.h1`
border: 1px solid black;
width: 550px;
height: 150px;
justify-content: right;
margin-left: 30%;

`
const StyledParagraph = styled.p`
border: 1px solid black;
width: 300px;
margin-top: 100px;
margin-left: 150px;
justify-content: center;
font-size: 20px;
`