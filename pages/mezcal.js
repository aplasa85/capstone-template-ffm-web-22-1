import React from "react";
import Head from "next/head";
import Image from "next/image"
import Icon from "../public/Assets/Agave.jpg"
import MezcalCard from "../public/Assets/MezcalPics"
//import TequilaList from "../_data/TequilaList"
import styled from "styled-components"
import Link from "next/link";

const mezcal = () => {
  return (
    <div>
      <Head>
        <title>Mezcal</title>
      </Head>
      <>
    

    <StyledTitle>Casa del Agave</StyledTitle>
    <StyledTitle1>Mezcal</StyledTitle1>

    <StyledParagraph>
    Welcome to the Casa
    del Agave online shop. 
    Here you can find a fine
    selection of tequila and
    mezcal brands delivered
    right to your home.
    Thank you for choosing us 
    and we certainly hope 
    you will find the beverage 
    of your convenience.
    </StyledParagraph>

    <StyledImage src={Icon} width="310" height="255" alt="an image" />
</>

<Link href="/mezcal/[id]" as={`/product/${mezcal.id}`}>

          <StyledCard>

              <h3> {mezcal.brand} &rarr; </h3>
              <p>{mezcal.type}</p>
              <p>{mezcal.rating}</p>
              <p>{mezcal.price}</p>
              {
                  <image src={`../public/Assets/MezcalPics`} width="150" height="150" alt="an image" />
              }


          </StyledCard>
      </Link>

<MezcalCard />
    

    </div>
  
)};

export default mezcal;

const StyledImage = styled(Image)`
    position: relative;
    left: 850px;
    bottom:260px;
    border: 1px solid black;
    padding: 30px;
`

const StyledTitle = styled.h1`
border: 1px solid black;
width: 400px;
height: 150px;
padding: 55px;
padding-left: 75px;
margin-left: 32%;
margin-top: 70px;
`

const StyledParagraph = styled.p`
border: 1px solid black;
width: 300px;
height: 235px;
margin-top: 100px;
margin-left: 150px;
font-size: 20px;
align-content: center;
padding: 10px;`


const StyledTitle1 = styled.h2`
border: 1px solid black;
height: 65px;
width: 150px;
padding: 20px;
margin-left: 575px;`

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  padding: 5px;
  margin: 15px 15px;

  border: 1px solid black;
  width: 350px;
  height: 350px;
  color:black;`