import Link from "next/link";

import styled from "styled-components";
import {useContext} from "react";
import QuantityHandler from "./QuantityHandler";

const BasketItem = ({item}) => {
  return (
    <StyledItem>
      <h2>{item.quantity}</h2>

      <Link href="/products/[productId]" as={`/products/${item.id}`}>
        {" "}
        <p>
          {item.brand} {item.type}
        </p>
      </Link>
      <p>{item.price}</p>
      <p>TOTAL: {+item.price * +item.quantity}</p>

      <QuantityHandler drink={item} />
    </StyledItem>
  );
};

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  border: 1px solid black;
  gap: 3rem;
  width: 25rem;
`;

export default BasketItem;
