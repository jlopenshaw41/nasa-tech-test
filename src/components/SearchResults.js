import React from "react";
import "../styles/SearchResults.css";

const SearchResults = ({ results }) => {
  return results.length ? (
    results.map((result) => {
      return (
        <>
          <img
            className="image"
            src={result}
            alt="Search result from NASA database"
          />
        </>
      );
    })
  ) : (
    <p>No results</p>
  );
};

export default SearchResults;
