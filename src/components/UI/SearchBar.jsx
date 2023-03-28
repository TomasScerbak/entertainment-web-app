import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  saveTrendMovies,
  clearTrendMovies,
} from "../../store/trendMoviesSlice";

import classes from "./SearchBar.module.css";

import SearchIcon from "../../assets/icon-search.svg";

const SearchBar = (props) => {
  const dispatch = useDispatch();
  const trendMovies = useSelector((state) => state.trendMovies.trendMovies);
  const [searchInput, setSearchInput] = useState("");

  const fetchedTrendMovies = props.movies;

  console.log(trendMovies);
  console.log(searchInput.length);

  const searchInputHandler = (e) => {
    e.preventDefault();

    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (searchInput) {
      const interval = setTimeout(() => {
        const result = fetchedTrendMovies.filter(({ title, name }) =>
          (title ?? name).toLowerCase().match(searchInput.toLowerCase())
        );
        if (result) {
          dispatch(saveTrendMovies(result));
        }
      }, 500);
      return () => clearInterval(interval);
    } else {
      dispatch(clearTrendMovies());
    }
  }, [searchInput, dispatch, fetchedTrendMovies]);

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
        {searchInput ? (
          <h1 className={classes["searched-heading"]}>
            {`Found ${trendMovies.length} results for '${searchInput}'`}
          </h1>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;
