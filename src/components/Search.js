import React, { useState } from "react";
import "../styles/Search.css";

const Search = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <input className="search-input" type="text" data-testid="search-input" onChange={(e) => setValue(e.target.value)}></input>
    </>
  );
};

export default Search;
