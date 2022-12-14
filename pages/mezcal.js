import React from "react";
import MezcalListComponent from "../components/MezcalListComponent";
import productList from "../_data/ProductList.json";

function MezcalPage() {
  return (
    <MezcalListComponent
      mezcalData={productList.filter(product => {
        return product.category === "Mezcal";
      })}
    />
  );
}

export default MezcalPage;
