import React from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import Header from "../components/Header";

const search = () => {
  return (
    <div>
      <Head>
        <title>Search</title>
      </Head>

      <h1>Search</h1>
    </div>
  );
};

export default search;
