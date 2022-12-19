import React from "react";
import MezcalCard from "../components/MezcalCard";

function Mezcal({mezcalData}) {
  return (
    <>
      {mezcalData &&
        mezcalData.map(mezcalInfo => (
          <MezcalCard key={mezcalInfo.id} mezcal={mezcalInfo} />
        ))}
    </>
  );
}

export default Mezcal;
