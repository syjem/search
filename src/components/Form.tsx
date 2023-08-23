import React, { ReactNode } from "react";

interface SearchFormProps {
  children: ReactNode;
}

const SearchForm: React.FC<SearchFormProps> = ({ children }) => {
  return <form action="https://google.com/search">{children}</form>;
};
export default SearchForm;
