import GlobalStyles from "../styles/GlobalStyles";
import Layout from "../components/LayoutComponent";
import {useState} from "react";

function MyApp({Component, pageProps}) {
  const [favorites, setFavorites] = useState(["1"]);

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component
          {...pageProps}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      </Layout>
    </>
  );
}
export default MyApp;
