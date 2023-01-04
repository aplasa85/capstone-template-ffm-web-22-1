import {createContext} from "react";
import {useState} from "react";
import products from "../_data/productList.json";

export const DrinksContext = createContext({products: products, basket: []});

export const DrinksProvider = ({children}) => {
  const [listedItems, setListedItems] = useState(products);
  const [basket, setBasket] = useState([]);

  return (
    <DrinksContext.Provider
      value={{listedItems, setListedItems, basket, setBasket}}
    >
      {children}
    </DrinksContext.Provider>
  );
};
