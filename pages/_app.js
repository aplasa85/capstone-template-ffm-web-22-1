//import Head from "next/head";
import GlobalStyles from "../styles/GlobalStyles";
import Layout from "../components/layout";



function MyApp({Component, pageProps}) {
  return (
<>
 

  <GlobalStyles />
<Layout>
      <Component {...pageProps} />
      </Layout>
      </>
    
  );

  }
export default MyApp
  