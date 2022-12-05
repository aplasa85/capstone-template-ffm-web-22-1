import Link from 'next/link'
import styled from 'styled-components'




const TequilaCard = ({ tequila }) => {
    return (
        <Link href="/article/[id]" as={`/article/${tequila.id}`}>
            <StyledCard>

                <h3> {tequila.brand} &rarr; </h3>
                <p>{tequila.type}</p>
                <p>{tequila.rating}</p>
                <p>{tequila.price}</p>
        
                    <img src={`https://picsum.photos/200`} width="150" height="150" alt="an image" />
                


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
    margin: 15px 15px;

    border: 1px solid black;
    width: 350px;
    height: 350px;
    color:black;
  
    Link {
        text-decoration: none;
    }
    
    &:hover {
        background-color: #f5f5f5;
    }
    `
export default TequilaCard