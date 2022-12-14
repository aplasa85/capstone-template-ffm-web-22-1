import React from "react";
import MezcalListComponent from "../components/MezcalListComponent";
import mezcalData from "../_data/ProductList.json";

function MezcalPage() {
  return <MezcalListComponent mezcalData={mezcalData} />;
}

export default MezcalPage;
