import React from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import styled from "styled-components";
import FavoriteToogle from "../../components/FavoriteToggle";
import {useContext} from "react";
import {DrinksContext} from "../../globalContext/drinksContext";
import QuantityHandler from "../../components/QuantityHandler";

function ProductDetails() {
  const router = useRouter();
  const {productId} = router.query;
  const {listedItems} = useContext(DrinksContext);

  const product = listedItems.find(product => {
    return product.id === productId;
  });

  return (
    <>
      {product && (
        <StyledContainer>
          <FavoriteToogle drink={product} />

          <h1>
            {product.brand} {product.type}
          </h1>
          <StyledImage
            src={product.image}
            width="350"
            height="350"
            alt="Bottle of Alcohol"
          />
          <div>
            <p>{product.description}</p>

            <h3>rating: {product.rating}</h3>

            <h2>{product.price} €</h2>
            <QuantityHandler drink={product} />
          </div>
        </StyledContainer>
      )}
    </>
  );
}
const StyledContainer = styled.div`
  margin: 4rem;
  display: flex;
  flex-direction: column;
`;

const StyledImage = styled(Image)`
  margin: 2rem;
`;

export default ProductDetails;
