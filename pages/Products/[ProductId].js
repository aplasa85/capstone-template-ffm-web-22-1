import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";



function ProductDetails () {
      //const router = useRouter ()
      //Products = router.query.ProductDetails
    return (
<>
        


        
<Link href="/"><StyledTitle>Casa del Agave</StyledTitle></Link>

  

        <h1>Random {}</h1>

       <StyledButton>Add to basket</StyledButton> 
      
      </>
    );
    };
  
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
  padding: 10px;

  const StyledLink = styled.link`

  
  
  export default ProductDetails




   
