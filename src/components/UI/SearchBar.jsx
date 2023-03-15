import { useEffect, useState } from "react";

import classes from "./SearchBar.module.css";

import SearchIcon from "../../assets/icon-search.svg";

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const movies = props.movies;

  const searchInputHandler = (e) => {
    e.preventDefault();

    setSearchInput(e.target.value);
    console.log(searchInput);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      const result = movies.filter(({ title, name }) =>
        (title ?? name).match(searchInput)
      );
      if (!result) {
        return movies;
      } else {
        return result; /* ulozit do storu */
      }
    }, [1000]);

    return () => clearTimeout(interval);
  }, [searchInput, movies]);

  return (
    <div className={classes["search-wrapper"]}>
      <label htmlFor="search">
        <img className={classes["search-icon"]} src={SearchIcon} alt="search" />
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
  );
};

export default SearchBar;
