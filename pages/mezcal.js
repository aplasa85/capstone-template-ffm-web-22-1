import React from "react";
import Mezcal from "../components/MezcalListComponent";
import mezcalData from "../_data/MezcalList.json";

function MezcalPage() {
  return <Mezcal mezcalData={mezcalData} />;
}

export default MezcalPage;
