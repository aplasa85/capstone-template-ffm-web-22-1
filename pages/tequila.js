import React from "react";
import productList from "../_data/ProductList.json";
import TequilaListComponent from "../components/TequilaListComponent";

function TequilaPage() {
  return (
    <TequilaListComponent
      tequilaData={productList.filter(product => {
        return product.category === "Tequila";
      })}
    />
  );
}

export default TequilaPage;
