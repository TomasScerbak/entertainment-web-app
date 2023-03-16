import { useEffect, useState } from "react";

import classes from "./SearchBar.module.css";

import SearchIcon from "../../assets/icon-search.svg";
import { useDispatch } from "react-redux";
import { saveTrendMovies } from "../../store/trendMoviesSlice";

const SearchBar = (props) => {
  const dispatch = useDispatch();
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
        return;
      } else {
        dispatch(saveTrendMovies(result));
      }
      return () => clearTimeout(interval);
    }, [1500]);
  }, [searchInput, dispatch, movies]);

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
