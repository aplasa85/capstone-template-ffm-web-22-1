import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import "../_data/productList.json";

function MezcalCard({mezcal}) {
  return (
    <Link href="/products/[productId]" as={`/products/${mezcal.id}`}>
      <StyledCard>
        <h3> {mezcal.brand} &rarr; </h3>
        <p>{mezcal.type}</p>
        <p>{mezcal.rating}</p>
        <p>{mezcal.price}</p>

        <Image
          src={mezcal.image}
          width="150"
          height="150"
          alt="Bottle of Mezcal"
        />

        <StyledButton className="Add">Add</StyledButton>
        <StyledButton className="Remove">Remove</StyledButton>
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

const StyledButton = styled.button`
  color: black;
  padding: 10px;
  margin: 20px;
`;

export default MezcalCard;
