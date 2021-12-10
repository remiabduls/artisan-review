import React from "react";
import SearchResult from "../SearchResultSummary/SearchResult/SearchResult";
import styles from "./SearchResults.module.css";

function SearchResults() {
  return (
    <div className={styles["search-results"]}>
      <SearchResult />
      <SearchResult />
    </div>
  );
}

export default SearchResults;
