import Link from "next/link";
import Image from "next/image";
import "../_data/productList.json";
import StyledCard from "./StyledCard.js";
import {useState} from "react";
import Products from "../pages/products";

function MezcalCard({mezcal, favorites, setFavorites}) {
  const [bookmarked, setBookmarked] = useState(false);

  function handleClick() {
    setFavorites([...favorites, mezcal.id]);
    setBookmarked(!bookmarked);
  }
  console.log(favorites);

  return (
    //<Link href="/products/[productId]" as={`/products/${mezcal.id}`} />
    <StyledCard>
      <h3> {mezcal.brand} &rarr; </h3>
      <p>{mezcal.type}</p>
      <p>{mezcal.rating}</p>
      <p>{mezcal.price}</p>

      <Image
        src={mezcal.image}
        width="150"
        height="150"
        alt="Bottle of Mezcal"
      />

      <button className="Add">Add</button>
      <button className="Remove">Remove</button>
      <button className="favorite" onClick={() => handleClick()}>
        Favorite
      </button>
    </StyledCard>
  );
}

export default MezcalCard;
