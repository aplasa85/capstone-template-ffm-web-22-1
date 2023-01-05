import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import DrinkCard from "../../components/DrinkCard";
import {useContext} from "react";
import {DrinksContext} from "../../globalContext/drinksContext";
import StyledContainer from "../../components/styled/StyledContainer";
import styled from "styled-components";

function DrinkType() {
  const [drinkTypeCap, setDrinkTypeCap] = useState("");
  const {listedItems} = useContext(DrinksContext);
  const router = useRouter();
  const {drinkType} = router.query;
  const categoryType = listedItems.filter(
    product => product.category.toLowerCase() === drinkType
  );
  // const drinkTypeCap = drinkType.charAt(0).toUpperCase() + drinkType.slice(1);

  useEffect(() => {
    if (drinkType) {
      setDrinkTypeCap(drinkType.charAt(0).toUpperCase() + drinkType.slice(1));
    }
  }, drinkType);

  return (
    <StyledContainer>
      <h1>{drinkTypeCap} list</h1>
      <StyledList>
        {categoryType.map(product => (
          <DrinkCard key={product.id} drink={product} />
        ))}
      </StyledList>
    </StyledContainer>
  );
}
const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default DrinkType;
