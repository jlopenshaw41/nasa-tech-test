import React, { useState } from "react";
import "../styles/Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <form className="search-form">
        <input
          className="search-input"
          type="text"
          aria-label="Search"
          data-testid="search-input"
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button className="search-btn" type="submit" data-testid="search-btn">
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
        </button>
      </form>
    </>
  );
};

export default Search;
