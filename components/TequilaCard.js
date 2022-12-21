import Link from "next/link";
import Image from "next/image";
import StyledCard from "./StyledCard.js";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import "../components/ProductList";

const TequilaCard = ({listedItems, setListedItems, tequila}) => {
  function toggleBookmark() {
    const updatedItem = {...tequila, favorite: !tequila.favorite};
    const newArr = listedItems.map(a =>
      a.id === tequila.id ? updatedItem : a
    );
    setListedItems(newArr);
  }

  return (
    <div>
      <Link href="/product/[id]" as={`/product/${tequila.id}`} />

      <Link href="/products/[productId]" as={`/products/${tequila.id}`}>
        <StyledCard>
          <div onClick={toggleBookmark}>
            {tequila.favorite ? (
              <AiFillStar style={{fontSize: "1.4rem"}} />
            ) : (
              <AiOutlineStar style={{fontSize: "1.4rem"}} />
            )}
          </div>
          <p>{String(tequila.favorite)}</p>
          <h3> {tequila.brand} &rarr; </h3>
          <p>{tequila.type}</p>
          <p>{tequila.rating}</p>
          <p>{tequila.price}</p>

          <Image
            src={tequila.image}
            width="150"
            height="150"
            alt="Bottle of Tequila"
          />

          <button className="Add">Add</button>
          <button className="Remove">Remove</button>
        </StyledCard>
      </Link>
    </div>
  );
};

export default TequilaCard;
