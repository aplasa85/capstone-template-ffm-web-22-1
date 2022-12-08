import React from "react";
import tequilaData from "../_data/TequilaList.json";
import Tequila from "../components/TequilaListComponent";

function TequilaPage() {
  return <Tequila tequilaData={tequilaData} />;
}

export default TequilaPage;
