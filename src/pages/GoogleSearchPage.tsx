import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import GoogleSearch from "../components/MainSearch";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <GoogleSearch />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
