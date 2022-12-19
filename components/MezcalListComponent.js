import React from "react";
import MezcalCard from "../components/MezcalCard";

function Mezcal({mezcalData, favorites, setFavorites}) {
  return (
    <>
      {mezcalData &&
        mezcalData.map(mezcalInfo => (
          <MezcalCard
            favorites={favorites}
            setFavorites={setFavorites}
            key={mezcalInfo.id}
            mezcal={mezcalInfo}
          />
        ))}
    </>
  );
}

export default Mezcal;
