import Link from 'next/link'
import styled from 'styled-components'
//import Image from 'next/image'




const MezcalCard = ({ mezcal }) => {
    return (
        <Link href="/article/[id]" as={`/article/${mezcal.id}`}>
            <StyledCard>

                <h3> {mezcal.brand} &rarr; </h3>
                <p>{mezcal.type}</p>
                <p>{mezcal.rating}</p>
                <p>{mezcal.price}</p>
        
                    <img src={`${mezcal.id}`} width="150" height="150" alt="an image" />
            


            <br/>
                <button className='Add'>Add</button>
                <button className= 'Remove'>Remove</button>
              
            </StyledCard>
        </Link>
    )
}
const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    


    padding: 5px;
    margin: 25px 250px;

    border: 1px solid black;
    width: 350px;
    height: 350px;
    color:black;
  
    Link {
        text-decoration: none;
    }
    
    /*&:hover {
        background-color: #f5f5f5;
    }*/
    `

export default MezcalCard