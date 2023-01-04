import styled from "styled-components";
import QuantityHandler from "./QuantityHandler";

const BasketItem = ({item}) => {
  return (
    <StyledItem>
      <div className="info">
        <h3>
          {item.brand} {item.type}
        </h3>
        <p>
          <span style={{fontWeight: 800}}>
            {item.quantity} x {item.price} €{" "}
          </span>
        </p>
      </div>
      <div className="handler">
        <QuantityHandler drink={item} />
      </div>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 2rem;
  margin: 1rem 0;
  border: 1px solid #ccc;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
  }
`;

export default BasketItem;
