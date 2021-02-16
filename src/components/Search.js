import React, { useState } from "react";
import "../styles/Search.css";

const Search = () => {
  return (
    <>
      <input className="search-input" type="text" data-testid="search-input"></input>
    </>
  );
};

export default Search;
