import React from "react";
import NavBar from "../NavBar/NavBar";
import SearchNav from "../NavBar/SearchNav/SearchNav";
import SearchResults from "./SearchResults/SearchResults";
import SearchResultSummary from "./SearchResultSummary/SearchResultSummary";

function Search() {
  return (
    <div>
      <NavBar />
      <SearchNav />
      <SearchResultSummary/>
      <SearchResults/>
    </div>
  );
}

export default Search;
