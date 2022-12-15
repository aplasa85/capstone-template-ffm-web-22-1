import React from "react";
import Head from "next/head";
import Image from "next/image";
import Icon from "../public/Assets/Agave.jpg";
import TequilaCard from "../components/TequilaCard";
import styled from "styled-components";
import Link from "next/link";
import Header from "../components/Header";

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
