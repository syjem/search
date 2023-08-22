import { useState } from "react";

import Google from "../assets/google.png";

import { Button, Stack } from "@mui/material";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

export default function GoogleSearch() {
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
      </div>
      <form action="https://google.com/search">
        <SearchInput search={search} handleSearch={handleSearch} />
        <Stack spacing={1.5} direction="row" className="stack" mt={5}>
          <Button className="search-btn" variant="contained" type="submit">
            Google Search
          </Button>
          <Button
            variant="contained"
            type="submit"
            name="btnI"
            color="secondary"
            className="search-btn"
          >
            I'm Feeling Lucky
          </Button>
        </Stack>
      </form>
    </main>
  );
}
