import React from "react";
import Head from "next/head";
import Image from "next/image"
import Icon from "../public/Assets/Agave.jpg"
import MezcalCard from "../components/MezcalCard.js"
//import TequilaList from "../_data/TequilaList"
import styled from "styled-components"
import Link from "next/link";
import Mezcal from "../components/MezcalListComponent";
import mezcalData from "../_data/MezcalList.json"

function MezcalPage() {
    return <Mezcal mezcalData={mezcalData} />
  }
  
  export default MezcalPage;
  
  