import React, { useState } from "react";
import "../styles/Search.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import getImages from "../requests/getImages";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  }

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          aria-label="Search"
          data-testid="search-input"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search NASA's image library..."
        ></input>
        <button className="search-btn" type="submit" data-testid="search-btn">
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
        </button>
      </form>
    </>
  );
};

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
}

export default Search;
