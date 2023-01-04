import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import FavoriteToogle from "./FavoriteToggle";
import QuantityHandler from "./QuantityHandler";

const DrinkCard = ({drink}) => {
  return (
    <StyledCard>
      <Link href="/products/[productId]" as={`/products/${drink.id}`}>
        <h3 style={{textAlign: "center"}}> {drink.brand} </h3>
        <StyledBox>
          <div style={{maxWidth: "6rem"}}>
            <p>{drink.type}</p>
            <p>{drink.rating}</p>
            <p>{drink.price} €</p>
          </div>

          <Image
            src={drink.image}
            width="150"
            height="150"
            alt="Bottle of drink"
          />
        </StyledBox>
      </Link>
      <QuantityHandler drink={drink} />

      <FavoriteToogle drink={drink} />
    </StyledCard>
  );
};

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
  margin: 2rem;
  border: 1px solid black;
  width: 28rem;
  height: 28rem;
  color: black;
  background-color: #f5f5f5;

  a {
    text-decoration: none;
    color: black;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 3rem;
    padding: 0;
  }
  @media (max-width: 500px) {
    margin: 2rem 0;
    width: 20rem;
  }
`;

export default DrinkCard;
