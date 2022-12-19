import React from "react";
import Header from "../components/Header";
import {useRouter} from "next/router";
import product from "../_data/productList.json";
import StyledCard from "../components/StyledCard";
import Image from "next/image";

const favorite = ({favorites, setFavorites}) => {
  const router = useRouter();
  const {bookmarkedCard} = router.query;

  const bookmarked = product.filter(product => {
    return favorites.includes(product.id);
  });

  return (
    <>
      <Header />
      {bookmarked.map(item => {
        return (
          <StyledCard>
            <h3> {item.brand} &rarr; </h3>
            <p>{item.type}</p>
            <p>{item.rating}</p>
            <p>{item.price}</p>

            <Image src={product.image} width="150" height="150" alt="Bottle" />

            <button className="Add">Add</button>
            <button className="Remove">Remove</button>
            {/* <button className="favorite" onClick={handleClick}>
              Favorite
            </button> */}
          </StyledCard>
        );
      })}
    </>
  );
};
export default favorite;
