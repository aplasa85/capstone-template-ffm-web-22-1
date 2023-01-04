import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {useContext} from "react";
import {DrinksContext} from "../globalContext/drinksContext";

const FavoriteToogle = ({drink}) => {
  const {listedItems, setListedItems} = useContext(DrinksContext);

  function toggleFavorite() {
    const updatedItem = {...drink, favorite: !drink.favorite};
    const newArr = listedItems.map(a => (a.id === drink.id ? updatedItem : a));
    setListedItems(newArr);
  }

  return (
    <div onClick={toggleFavorite}>
      {drink.favorite ? (
        <AiFillStar style={{fontSize: "1.4rem"}} />
      ) : (
        <AiOutlineStar style={{fontSize: "1.4rem"}} />
      )}
    </div>
  );
};

export default FavoriteToogle;
