import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import FavoriteToogle from "./FavoriteToggle";
import QuantityHandler from "./QuantityHandler";

const DrinkCard = ({drink}) => {
  return (
    <StyledCard>
      <FavoriteToogle drink={drink} />
      <Link href="/products/[productId]" as={`/products/${drink.id}`}>
        {/* <p>{String(drink.favorite)}</p> */}
        <h3> {drink.brand} &rarr; </h3>
        <p>{drink.type}</p>
        <p>{drink.rating}</p>
        <p>{drink.price}</p>

        <Image
          src={drink.image}
          width="150"
          height="150"
          alt="Bottle of drink"
        />
      </Link>
      <QuantityHandler drink={drink} />
    </StyledCard>
  );
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  padding: 0.3125rem;
  margin: 0.15625rem 25rem;

  border: 1px solid black;
  width: 28.125rem;
  height: 28.125rem;
  color: black;
`;

export default DrinkCard;
