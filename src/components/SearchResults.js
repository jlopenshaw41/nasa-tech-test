import React from "react";
import "../styles/SearchResults.css";
import PropTypes from "prop-types";

const SearchResults = ({ results }) => {
  return results.length ? (
    results.map((result) => {
      return (
        <>
          <img
            className="image"
            src={result}
            alt="Search result from NASA database"
            data-testid="image"
          />
        </>
      );
    })
  ) : (
    <p>No results</p>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
}

export default SearchResults;
