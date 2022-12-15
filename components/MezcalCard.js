import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import "../_data/productList.json";
import StyledCard from "./StyledCard.js";

// const bookmarked = () => {
//   toggleBookmarked();
// };

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

        <button className="Add">Add</button>
        <button className="Remove">Remove</button>
        <button>Favorite</button>
      </StyledCard>
    </Link>
  );
}

export default MezcalCard;
