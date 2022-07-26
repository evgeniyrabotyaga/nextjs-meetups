import Navigation from "../components/layout/Navigation";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Navigation>
      <Component {...pageProps} />
    </Navigation>
  );
}

export default MyApp;
