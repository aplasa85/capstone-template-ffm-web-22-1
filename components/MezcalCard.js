import Link from "next/link";
import Image from "next/image";
import "../_data/productList.json";
import StyledCard from "./StyledCard.js";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

const MezcalCard = ({productList, setProductList, mezcal}) => {
  function toggleBookmark() {
    const updatedProduct = {...mezcal, favorite: !mezcal.favorite};
    const newArr = productList.map(a =>
      a.id === mezcal.id ? updatedProduct : a
    );
    setProductList(newArr);
  }

  return (
    <div>
      <Link href="/products/[productId]" as={`/products/${mezcal.id}`}>
        <StyledCard>
          <div onClick={toggleBookmark}>
            {mezcal.favorite ? (
              <AiFillStar style={{fontSize: "1.4rem"}} />
            ) : (
              <AiOutlineStar style={{fontSize: "1.4rem"}} />
            )}
          </div>
          <p>{String(mezcal.favorite)}</p>
          <h3> {mezcal.brand} &rarr; </h3>
          <p>{mezcal.type}</p>
          <p>{mezcal.rating}</p>
          <p>{mezcal.price}</p>

          <Image
            src={mezcal.image}
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

export default MezcalCard;
