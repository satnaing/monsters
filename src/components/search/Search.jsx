import React from "react";
import "./search.css";

const Search = (props) => (
  <div>
    <input
      className="search"
      type="search"
      placeholder={`Search ${props.searchText}`}
      onChange={props.handleChange}
    />
  </div>
);

export default Search;
