import { Link } from "react-router-dom";

import { useState } from "react";
import SearchInput from "./SearchInput";
import Google from "../assets/google.png";
import SearchForm from "./Form";

const ImageSearch = () => {
  const [search, setSearch] = useState<string>("");

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <main className="main">
      <div className="main-image-wrapper">
        <Link to="/">
          <img src={Google} alt="Google" className="google-image" />
        </Link>
        <div className="image-text-wrapper">
          <span>Images</span>
        </div>
      </div>
      <SearchForm>
        <SearchInput search={search} handleSearch={handleSearch} />
        <input type="hidden" name="tbm" value="isch" />
      </SearchForm>
    </main>
  );
};

export default ImageSearch;
