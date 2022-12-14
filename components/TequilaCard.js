import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import "../_data/productList.json";

function TequilaCard({tequila}) {
  return (
    <Link href="/products/[productId]" as={`/products/${tequila.id}`}>
      <StyledCard>
        <h3> {tequila.brand} &rarr; </h3>
        <p>{tequila.type}</p>
        <p>{tequila.rating}</p>
        <p>{tequila.price}</p>

        <Image
          src={tequila.image}
          width="150"
          height="150"
          alt="Bottle of Tequila"
        />

        <button className="Add">Add</button>
        <button className="Remove">Remove</button>
      </StyledCard>
    </Link>
  );
}
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  padding: 5px;
  margin: 25px 400px;

  border: 1px solid black;
  width: 450px;
  height: 450px;
  color: black;

  Link {
    text-decoration: none;
  }

  /*&:hover {
        background-color: #f5f5f5;
    }*/
`;

export default TequilaCard;
