import React from "react";
import { useStore } from "../../store/useStore";

const Search = () => {
  const { searchQuery, setSearchQuery } = useStore();

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="search"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
