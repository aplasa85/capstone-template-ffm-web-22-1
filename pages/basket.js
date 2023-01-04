import React, {useState} from "react";

import {useContext} from "react";
import {DrinksContext} from "../globalContext/drinksContext";

import BasketItem from "../components/BasketItem";
import {StyledButton} from "../components/styled/StyledElements";

const Basket = () => {
  const {basket, setBasket} = useContext(DrinksContext);
  const [purchaseComplete, setPurchaseComplete] = useState(false);

  const getTotal = () => {
    const amounts = basket.map(item => item.price * item.quantity);
    let total = 0;
    for (let i = 0; i < amounts.length; i++) {
      total += amounts[i];
    }
    return total;
  };

  const makePurchase = () => {
    setBasket([]);

    setPurchaseComplete(true);
  };

  return (
    <div>
      <h1>Basket</h1>

      {basket.map(item => (
        <BasketItem key={item.id} item={item} />
      ))}

      {basket.length > 0 && !purchaseComplete && (
        <div>
          <h2>Total: {getTotal()} €</h2>
          <StyledButton
            onClick={() => {
              makePurchase();
            }}
          >
            Purchase
          </StyledButton>
        </div>
      )}

      {basket.length === 0 && purchaseComplete ? (
        <h2>Thank you for your purchase!</h2>
      ) : null}
    </div>
  );
};

export default Basket;
