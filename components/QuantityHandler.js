import React from "react";
import {useContext, useState} from "react";
import {DrinksContext} from "../globalContext/drinksContext";
import {
  StyledButton,
  StyledInputNumber,
} from "../components/styled/StyledElements";

const QuantityHandler = ({drink}) => {
  const [quantity, setQuantity] = useState(1);
  const [basketQuantity, setBasketQuantity] = useState(0);
  const {basket, setBasket} = useContext(DrinksContext);
  const [item] = useState({...drink});

  const itemExists = id => {
    return basket.some(item => item.id === id);
  };

  const add = () => {
    if (itemExists(item.id)) {
      const newQuantity = basketQuantity + quantity;
      const updatedItem = {...item, quantity: newQuantity};
      let newArr = [];

      if (updatedItem.quantity > 0) {
        newArr = basket.map(a => (a.id === item.id ? updatedItem : a));
      } else {
        newArr = basket.filter(a => a.id !== item.id);
      }

      setBasket(newArr);
    } else {
      if (quantity > 0) {
        const newItem = {...item, quantity: quantity};
        setBasket([...basket, newItem]);
      }
    }
    setBasketQuantity(basketQuantity + quantity);
    setQuantity(1);
  };

  const updateQuantity = e => {
    setQuantity(+e.target.value);
  };

  return (
    <div>
      <StyledInputNumber
        type="number"
        value={quantity}
        onChange={updateQuantity}
      />
      <StyledButton onClick={add}>
        {itemExists(item.id) ? "Update quantity" : "Add to Basket"}
      </StyledButton>
    </div>
  );
};

export default QuantityHandler;
