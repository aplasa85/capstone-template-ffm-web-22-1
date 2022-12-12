import React from "react"
import styled from "styled-components";
import Link from "next/link";


function ProductDetails  ({ProductDetails})  {
return (

<>
<Link href="/"><StyledTitle>Casa del Agave</StyledTitle></Link>

<p>Hallo!  </p>


<StyledButton>Add to basket</StyledButton> 

</>
)}

export default ProductDetails;

const StyledTitle = styled.h1`
border: 1px solid black;
width: 400px;
height: 150px;
padding: 55px;
padding-left: 75px;
margin-left: 32%;
 margin-top: 70px;
`;

const StyledButton = styled.button`
padding: 10px`;
