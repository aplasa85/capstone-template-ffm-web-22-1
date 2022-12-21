import styled from "styled-components";
import TequilaCard from "./TequilaCard";
import MezcalCard from "./MezcalCard";

const ProductList = ({listedItems, setListedItems}) => {
  return (
    <StyledList>
      {listedItems.map(item => {
        return (
          <ItemCard
            key={item.id}
            item={item}
            listedItems={listedItems}
            setListedItems={setListedItems}
          />
        );
      })}
    </StyledList>
  );
};

export default ProductList;
