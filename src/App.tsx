import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

import "./styles/styles.scss";
import GoogleSearch from "./components/MainSearch";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <GoogleSearch />
      <Footer />
    </>
  );
}

export default App;
