import GlobalStyles from "../styles/GlobalStyles";
import Layout from "../components/LayoutComponent";
import {useState} from "react";
import {DrinksProvider, DrinksContext} from "../globalContext/drinksContext";

function MyApp({Component, pageProps}) {
  const [favorites, setFavorites] = useState(["1"]);

  return (
    <>
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
