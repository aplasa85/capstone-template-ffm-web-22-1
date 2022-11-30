
//import { redirect } from "next/dist/server/api-utils"
import styled from "styled-components"


export default function Layout({children}) {
    return (
   <>
        <StyledNav>
         
        <StyledMenu />      

<header>
      
 <button className="menu">Menu</button>
   <input /> 
  <button className="menu">Search</button>  


   </header>
   </StyledNav >
    


     <main>

        {children}

     </main> 
     </>
    )}


const StyledNav = styled.nav`
background-color: black;
align-items: right;
width: 100%;
padding: 5px;
align-content: space-evenly;
`

const StyledMenu = styled.input`
padding: 10;
display: flex;
//justify-content: right;
//align-items: space-around;`
 
