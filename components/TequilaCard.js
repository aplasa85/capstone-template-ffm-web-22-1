import Link from "next/link";
import Image from "next/image";
import StyledCard from "./StyledCard";

function TequilaCard({tequila}) {
  return (
    <Link href="/article/[id]" as={`/article/${tequila.id}`}>
      <StyledCard>
        <h3> {tequila.brand} &rarr; </h3>
        <p>{tequila.type}</p>
        <p>{tequila.rating}</p>
        <p>{tequila.price}</p>

        <Image
          src={`${tequila.image}`}
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

export default TequilaCard;
