import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import StyledCard from "./StyledCard";

function MezcalCard({mezcal}) {
  return (
    <Link href="/article/[id]" as={`/article/${mezcal.id}`}>
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


const StyledButton = styled.button`
  color: black;
  padding: 10px;
  margin: 20px;
`;

export default MezcalCard;
