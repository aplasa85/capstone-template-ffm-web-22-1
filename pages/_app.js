import GlobalStyles from "../styles/GlobalStyles";
import Layout from "../components/LayoutComponent";
import {useState} from "react";
import {DrinksProvider, DrinksContext} from "../globalContext/drinksContext";
import Head from "next/head";
function MyApp({Component, pageProps}) {
  const [favorites, setFavorites] = useState(["1"]);

  return (
    <>
      <Head>
        <title>Casa del Agave</title>
      </Head>
      <GlobalStyles />
      <DrinksProvider value={DrinksContext}>
        <Layout>
          <Component
            {...pageProps}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        </Layout>
      </DrinksProvider>
    </>
  );
}
export default MyApp;
