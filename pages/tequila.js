import React from "react";
//import Head from "next/head";
//import Image from "next/image";
//import Icon from "../public/Assets/Agave.jpg"
//import TequilaCard from "../components/TequilaCard";
import tequilaData from "../_data/TequilaList.json";
//import styled from "styled-components"
//import Link from "next/link";
import Tequila from "../components/TequilaListComponent";

function TequilaPage() {
  return <Tequila tequilaData={tequilaData} />;
}

export default TequilaPage;
