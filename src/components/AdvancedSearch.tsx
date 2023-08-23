import { useState, ChangeEvent } from "react";
import SearchForm from "./Form";

import { Button } from "@mui/material";

interface AdvancedSearchState {
  [key: string]: string;
}

const inputFields: { id: string; name: string; label: string }[] = [
  {
    id: "all-these-words",
    name: "as_q",
    label: "All these words",
  },
  {
    id: "exact-word-phrase",
    name: "as_epq",
    label: "This exact word or phrase",
  },
  {
    id: "any-of-these-words",
    name: "as_oq",
    label: "Any of these words",
  },
  {
    id: "none-of-these-words",
    name: "as_eq",
    label: "None of these words",
  },
];

const AdvancedSearch = () => {
  const [advanceSearch, setAdvancedSearch] = useState<AdvancedSearchState>(
    inputFields.reduce(
      (acc, field) => ({ ...acc, [field.id]: "" }),
      {} as AdvancedSearchState
    )
  );

  const handleAdvancedSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setAdvancedSearch((prevValue) => ({
      ...prevValue,
      [id]: value,
    }));
  };

  return (
    <main className="main">
      <div className="advanced-main-header">
        <h2>Advanced Search</h2>
      </div>

      <SearchForm>
        <h3 className="advanced-search-header">Find pages with...</h3>
        {inputFields.map((field) => (
          <div className="form-group" key={field.id}>
            <label htmlFor="{field.id}">{field.label}: </label>
            <input
              type="text"
              name={field.name}
              id={field.id}
              autoComplete="off"
              value={advanceSearch[field.id]}
              onChange={handleAdvancedSearchChange}
            />
          </div>
        ))}
        <div className="form-group">
          <Button
            type="submit"
            variant="contained"
            className="advanced-search-btn"
          >
            Advanced Search
          </Button>
        </div>
      </SearchForm>
    </main>
  );
};
export default AdvancedSearch;
