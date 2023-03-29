import { useEffect, useState } from "react";

import classes from "./SearchBar.module.css";

import SearchIcon from "../../assets/icon-search.svg";

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const searchInputHandler = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (searchInput) {
      const interval = setTimeout(() => {
        const result = props.data.filter(({ title, name }) =>
          (title ?? name).toLowerCase().match(searchInput.toLowerCase())
        );
        if (result) {
          props.onSave(result);
        }
      }, 500);
      return () => clearTimeout(interval);
    } else {
      props.onClear();
    }
  }, [searchInput]);

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
    </div>
  );
};

export default SearchBar;
