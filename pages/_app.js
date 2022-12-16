import GlobalStyles from "../styles/GlobalStyles";
import Layout from "../components/LayoutComponent";

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
export default MyApp;
