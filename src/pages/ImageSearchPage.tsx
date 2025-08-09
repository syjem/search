import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageSearch from "../components/ImageSearch";

function SearchImage() {
  return (
    <React.Fragment>
      <Header />
      <ImageSearch />
      <Footer />
    </React.Fragment>
  );
}

export default SearchImage;
