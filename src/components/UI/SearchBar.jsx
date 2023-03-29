import { useState } from "react";

import classes from "./SearchBar.module.css";

import SearchIcon from "../../assets/icon-search.svg";

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");

  console.log(searchInput);

  const searchInputHandler = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

    if (searchInput) {
      const result = props.data.filter(({ title, name }) =>
        (title ?? name).toLowerCase().match(searchInput.toLowerCase())
      );
      if (result) {
        props.onSave(result);
      }
    } else {
      props.onClear();
    }
  };

  return (
    <div className={classes["search-wrapper"]}>
      <div className={classes["input-wrapper"]}>
        <label htmlFor="search">
          <img
            className={classes["search-icon"]}
            src={SearchIcon}
            alt="search"
          />
        </label>
        <input
          value={searchInput}
          onChange={searchInputHandler}
          id="search"
          className={classes.search}
          type="text"
          placeholder={props.placeholder}
        />
      </div>
      <div>
        {/* {searchInput ? (
          <h1 className={classes["searched-heading"]}>
            {`Found ${props.data.length} results for '${searchInput}'`}
          </h1>
        ) : null} */}
      </div>
    </div>
  );
};

export default SearchBar;
