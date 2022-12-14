import React from "react";
import tequilaData from "../_data/ProductList.json";
import TequilaListComponent from "../components/TequilaListComponent";

function TequilaPage() {
  return <TequilaListComponent tequilaData={tequilaData} />;
}

export default TequilaPage;
