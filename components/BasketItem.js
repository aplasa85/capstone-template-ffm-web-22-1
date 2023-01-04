//import Link from "next/link";

import styled from "styled-components";
import QuantityHandler from "./QuantityHandler";

const BasketItem = ({item}) => {
  return (
    <StyledItem>
      <StyledQuantity>
        <h2>{item.quantity}</h2>
        <p>Quantity</p>
      </StyledQuantity>

      {
        // <Link href="/products/[productId]" as={`/products/${item.id}`} style={{ textDecoration: "none", color: "#66f", backgroundColor: "#aaa", flexBasis: "30%", order: 2 }}>
        //     {" "}
      }
      <StyledName>
        <p>
          {item.brand} {item.type}
        </p>
      </StyledName>
      {
        // </Link>
      }

      <StyledPrice>
        <p>{item.price}</p>
        <p>TOTAL: {+item.price * +item.quantity}</p>

        <QuantityHandler drink={item} />
      </StyledPrice>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  border: 1px solid black;
  gap: 3rem;
  width: 65rem;
  max-width: 80vw;
  height: 8rem;

  @media (max-width: 768px) {
    width: 100%;

    height: 20rem;
  }
`;
const StyledQuantity = styled.div`
  display: flex;
  flex-direction: column;
  gap: -1.5rem;
  margin: 0 1rem;
  order: 1;
`;
const StyledName = styled.div`
  cursor: pointer;
  flex-basis: 50%;
  text-align: center;
  text-decoration: none;
  color: "#66f";
  background-color: "#aaa";
  flex-basis: "30%";
  order: 2;
`;

const StyledPrice = styled.div`
  display: flex;
  order: 3;
`;

export default BasketItem;
