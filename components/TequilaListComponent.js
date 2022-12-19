import React from "react";
import TequilaCard from "../components/TequilaCard";

function Tequila({tequilaData}) {
  return (
    <>
      {tequilaData &&
        tequilaData.map(tequilaInfo => (
          <TequilaCard key={tequilaInfo.id} tequila={tequilaInfo} />
        ))}
    </>
  );
}

export default Tequila;
